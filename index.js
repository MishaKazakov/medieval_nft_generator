const crypto = require("crypto");
const mergeImages = require("merge-images");
const { Image, Canvas } = require("canvas");
const {
  rmdirSync,
  mkdirSync,
  promises: { writeFile },
} = require("fs");
const {
  DEFAULT_IMAGES_PATH,
  DEFAULT_METADATA_PATH,
  IMAGES_BASE_URL,
  TOKEN_NAME_PREFIX,
  TOKEN_DESCRIPTION,
  TOTAL_TOKENS,
  ORDERED_TRAITS_LIST: traitsList,
} = require("./config");

const uniqueCombinationsHashes = [];

const createUniqueTokens = () => {
  return Array.from(Array(TOTAL_TOKENS)).map((_, i) => ({
    tokenId: i,
    traits: createUniqueTraitsCombination(),
  }));
};

const createUniqueTraitsCombination = () => {
  const traits = [];
  traitsList.forEach(({ display, type, options }) => {
    const filteredOptions = options.filter(({ value }) => {
      if (value === "PAPER_BAG.png" || value === "plague_mask.png") {
        return traits[3]?.value.includes("BOLD.png");
      }
      if (traits[3]?.value.includes("BOLD.png")&& type ==='Eyes') {
        return value === 'PAPER_BAG.png' || value === 'plague_mask.png'
      }
      if (value.startsWith("c_") || !value.match(/^\w_/)) {
        return true;
      }
      if (traits[1]?.value.toLowerCase().startsWith("b_")) {
        return value.toLowerCase().startsWith("b_");
      }
      if (!traits[1]?.value.toLowerCase().startsWith("b_")) {
        return !value.toLowerCase().startsWith("b_");
      }
      return true;
    });
    const option = getRandomWeightedOption(filteredOptions);
    if (option.value) {
      traits.push({
        ...(type && { type }),
        ...(display && { display }),
        ...option,
      });
    }
  });

  if (checkUniq(traits)) {
    return createUniqueTraitsCombination();
  }
  uniqueCombinationsHashes.push(traits);
  return traits;
};

function checkUniq(traits) {
  uniqueCombinationsHashes.some((existingCombination) => {
    const intersections = existingCombination.reduce(
      (acc, existingTrait, i) => {
        if (existingTrait === traits[i]) {
          acc++;
        }
        return acc;
      }
    );
    return intersections > 2;
  });
}

function mulberry32(a) {
  return function () {
    var t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const getRandomNumber = mulberry32(1);

const getRandomWeightedOption = (options) => {
  const accWeights = options.reduce(
    (acc, { weight }, i) => acc.concat(weight + (acc[i - 1] || 0)),
    []
  );
  const rand = getRandomNumber() * accWeights[accWeights.length - 1];
  const index = accWeights.findIndex((accWeight) => rand < accWeight);
  return options[index];
};

const hash = (msg) => crypto.createHash("sha256").update(msg).digest("hex");

const generateTokensFiles = async (tokens) => {
  directoryGuard(DEFAULT_METADATA_PATH);
  directoryGuard(DEFAULT_IMAGES_PATH);
  for (let token of tokens) {
    await generateTokenMetadata(token);
    await generateTokenImage(token);
  }
};

const directoryGuard = (directory) => {
  rmdirSync(directory, { recursive: true });
  mkdirSync(directory, { recursive: true });
};

const generateTokenMetadata = async ({ tokenId, traits }) => {
  const tokenMetadata = getMetadataFromToken({ tokenId, traits });
  await writeFile(`${DEFAULT_METADATA_PATH}${tokenId}`, tokenMetadata);
};

const generateTokenImage = async ({ tokenId, traits }) => {
  const tokenImage = await getImageFromTraits(traits);
  await writeFile(`${DEFAULT_IMAGES_PATH}${tokenId}.png`, tokenImage);
};

const getMetadataFromToken = ({ tokenId, traits }) => {
  const metadata = {
    tokenId,
    name: `${TOKEN_NAME_PREFIX}${tokenId}`,
    ...(TOKEN_DESCRIPTION && { description: TOKEN_DESCRIPTION }),
    image: `${IMAGES_BASE_URL}${tokenId}`,
    attributes: traits.map(({ display, type, value }) => ({
      ...(display && { display_type: display }),
      ...(type && { trait_type: type }),
      value,
    })),
  };
  return JSON.stringify(metadata, null, 2);
};

const getImageFromTraits = async (traits) => {
  try {
    const b64 = await mergeImages(
      traits.filter(({ image }) => image).map(({ image }) => image),
      { Canvas, Image }
    );

    const image = new Buffer.from(
      b64.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );

    return image;
  } catch (e) {
    console.log("traits", traits);
    throw e;
  }
};

const printStats = (tokens) => {
  console.log(
    "\nSUCCESS!",
    `\n- images path: ${DEFAULT_IMAGES_PATH}`,
    `\n- metadata path: ${DEFAULT_METADATA_PATH}`,
    `\n\nTOTAL NUMBER OF TOKENS: ${tokens.length}`
  );
  traitsList.forEach(({ type, options }) => {
    console.log(`\nTRAIT TYPE: ${type || "<generic-type>"}`);
    options.forEach(({ value }) => {
      if (value) {
        const amount = tokens.filter(({ traits }) =>
          traits.some(
            (trait) =>
              (type ? trait.type === type : true) && trait.value === value
          )
        ).length;
        const percentage = ((amount / tokens.length) * 100).toFixed(2);
        console.log(
          `- there's ${amount} tokens with value ${value} (${percentage}% of total)`
        );
      }
    });
  });
};

/** MAIN SCRIPT **/
(async () => {
  console.log("Generating unique tokens files. Please wait...");
  try {
    const tokens = createUniqueTokens();
    await generateTokensFiles(tokens);
    printStats(tokens);
  } catch (err) {
    if (err instanceof RangeError) {
      console.log(
        `\nERROR: it was impossible to create ${TOTAL_TOKENS} unique tokens with the current configuration.`,
        "\nTo fix: try lowering the value of TOTAL_TOKENS or update ORDERED_TRAITS_LIST in the config."
      );
    } else throw err;
  }
})();
