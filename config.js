const config = {};

config.DEFAULT_IMAGES_PATH = "./images/";
config.DEFAULT_METADATA_PATH = "./metadata/";

// UPDATE THESE CONSTANTS BELOW WITH YOUR VALUES
config.IMAGES_BASE_URL = "https://base-url-to-my-nft-images.com/";
config.TOKEN_NAME_PREFIX = "My NFT #";
config.TOKEN_DESCRIPTION = "My NFT description.";
config.TOTAL_TOKENS = 10000;

// UPDATE THIS ARRAY BELOW WITH YOUR TRAITS LIST
config.ORDERED_TRAITS_LIST = [
  {
    type: "Background",
    options: [
      {
        image: "./traits/background/BACKGROUND1.png",
        value: "BACKGROUND1.png",
        weight: 1,
      },
      {
        image: "./traits/background/BACKGROUND2.png",
        value: "BACKGROUND2.png",
        weight: 1,
      },
      {
        image: "./traits/background/BACKGROUND3.png",
        value: "BACKGROUND3.png",
        weight: 1,
      },
      {
        image: "./traits/background/BACKGROUND4.png",
        value: "BACKGROUND4.png",
        weight: 1,
      },
      {
        image: "./traits/background/BACKGROUND5.png",
        value: "BACKGROUND5.png",
        weight: 1,
      },
      {
        image: "./traits/background/BACKGROUND6.png",
        value: "BACKGROUND6.png",
        weight: 1,
      },
      {
        image: "./traits/background/CKY.png",
        value: "CKY.png",
        weight: 1,
      },
      {
        image: "./traits/background/COVER_CLOUDS.png",
        value: "COVER_CLOUDS.png",
        weight: 1,
      },
      {
        image: "./traits/background/STARS.png",
        value: "STARS.png",
        weight: 1,
      },
    ],
  },
  {
    type: "Body",
    options: [
      {
        image: "./traits/body/BASE.png",
        value: "BASE.png",
        weight: 1,
      },
      {
        image: "./traits/body/BASE2.png",
        value: "BASE2.png",
        weight: 1,
      },
      {
        image: "./traits/body/B_BASE.png",
        value: "B_BASE.png",
        weight: 1,
      },
    ],
  },
  {
    type: "Clothes",
    options: [
      {
        image: "./traits/clothes/BASEBALL_JACKET.png",
        value: "BASEBALL_JACKET.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/GACHI.png",
        value: "GACHI.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/MARINE.png",
        value: "MARINE.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/PUFFER.png",
        value: "PUFFER.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/SUIT.png",
        value: "SUIT.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/T-Shirt_(lion).png",
        value: "T-Shirt_(lion).png",
        weight: 1,
      },
      {
        image: "./traits/clothes/VIETNAM.png",
        value: "VIETNAM.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/CHAIN_MAIL.png",
        value: "CHAIN_MAIL.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/HAVAII.png",
        value: "HAVAII.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/MEDIEVAL.png",
        value: "MEDIEVAL.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/RICK'S_ROBE.png",
        value: "RICK'S_ROBE.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/SUIT2.png",
        value: "SUIT2.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/T-shirt_(PRINT).png",
        value: "T-shirt_(PRINT).png",
        weight: 1,
      },
      {
        image: "./traits/clothes/CLERK.png",
        value: "CLERK.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/HOODIE.png",
        value: "HOODIE.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/PINK_FUR_COAT.png",
        value: "PINK_FUR_COAT.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/ROYALE.png",
        value: "ROYALE.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/SUIT3.png",
        value: "SUIT3.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/UEBANSKI_SWEATER.png",
        value: "UEBANSKI_SWEATER.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/CLERK2.png",
        value: "CLERK2.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/KOSUHA.png",
        value: "KOSUHA.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/PONCHO.png",
        value: "PONCHO.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/SPORT(black).png",
        value: "SPORT(black).png",
        weight: 1,
      },
      {
        image: "./traits/clothes/SWEATER_VEST.png",
        value: "SWEATER_VEST.png",
        weight: 1,
      },
      {
        image: "./traits/clothes/UNDERSHIRT.png",
        value: "UNDERSHIRT.png",
        weight: 1,
      },
    ],
  },
  {
    type: "Hair",
    options: [
      {
        image: "./traits/hair/BOLD.png",
        value: "BOLD.png",
        weight: 1,
      },
      {
        image: "./traits/hair/BORN_TO_KILL.png",
        value: "BORN_TO_KILL.png",
        weight: 1,
      },
      {
        image: "./traits/hair/B_FISHING_CUP.png",
        value: "B_FISHING_CUP.png",
        weight: 1,
      },
      {
        image: "./traits/hair/CUP.png",
        value: "CUP.png",
        weight: 1,
      },
      {
        image: "./traits/hair/B_RASTA.png",
        value: "B_RASTA.png",
        weight: 1,
      },
      {
        image: "./traits/hair/CROWN.png",
        value: "CROWN.png",
        weight: 1,
      },
      {
        image: "./traits/hair/FISHING_CUP.png",
        value: "FISHING_CUP.png",
        weight: 1,
      },
      {
        image: "./traits/hair/JAY'S_CUP.png",
        value: "JAY'S_CUP.png",
        weight: 1,
      },
      {
        image: "./traits/hair/MONK.png",
        value: "MONK.png",
        weight: 1,
      },
      {
        image: "./traits/hair/SANTA'S_HAT.png",
        value: "SANTA'S_HAT.png",
        weight: 1,
      },
      {
        image: "./traits/hair/B_AFRO.png",
        value: "B_AFRO.png",
        weight: 1,
      },
      {
        image: "./traits/hair/B_MEDIEVAL1.png",
        value: "B_MEDIEVAL1.png",
        weight: 1,
      },
      {
        image: "./traits/hair/B_USHANKA.png",
        value: "B_USHANKA.png",
        weight: 1,
      },
      {
        image: "./traits/hair/CUP.png",
        value: "CUP.png",
        weight: 1,
      },
      {
        image: "./traits/hair/HAT1.png",
        value: "HAT1.png",
        weight: 1,
      },
      {
        image: "./traits/hair/MEDIEVAL1.png",
        value: "MEDIEVAL1.png",
        weight: 1,
      },
      {
        image: "./traits/hair/PANAMA.png",
        value: "PANAMA.png",
        weight: 1,
      },
      {
        image: "./traits/hair/USHANKA.png",
        value: "USHANKA.png",
        weight: 1,
      },
      {
        image: "./traits/hair/B_CUP.png",
        value: "B_CUP.png",
        weight: 1,
      },
      {
        image: "./traits/hair/B_PANAMA.png",
        value: "B_PANAMA.png",
        weight: 1,
      },
      {
        image: "./traits/hair/COWBOYHAT.png",
        value: "COWBOYHAT.png",
        weight: 1,
      },
      {
        image: "./traits/hair/DOOMER'S_CUP.png",
        value: "DOOMER'S_CUP.png",
        weight: 1,
      },
      {
        image: "./traits/hair/HAT2.png",
        value: "HAT2.png",
        weight: 1,
      },
      {
        image: "./traits/hair/MEDIEVAL2.png",
        value: "MEDIEVAL2.png",
        weight: 1,
      },
      {
        image: "./traits/hair/RASTA.png",
        value: "RASTA.png",
        weight: 1,
      },
      {
        image: "./traits/hair/VIKING_beard.png",
        value: "VIKING_beard.png",
        weight: 1,
      },
    ],
  },
  {
    type: "Lips",
    options: [
      {
        image: "./traits/lips/B_DOOMER.png",
        value: "B_DOOMER.png",
        weight: 1,
      },
      {
        image: "./traits/lips/B_LIP2.png",
        value: "B_LIP2.png",
        weight: 1,
      },
      {
        image: "./traits/lips/B_MUSTASIO.png",
        value: "B_MUSTASIO.png",
        weight: 1,
      },
      {
        image: "./traits/lips/W_DOOMER.png",
        value: "W_DOOMER.png",
        weight: 1,
      },
      {
        image: "./traits/lips/W_LIP2.png",
        value: "W_LIP2.png",
        weight: 1,
      },
      {
        image: "./traits/lips/W_MUSTASIO.png",
        value: "W_MUSTASIO.png",
        weight: 1,
      },
      {
        image: "./traits/lips/С_MASK.png",
        value: "С_MASK.png",
        weight: 1,
      },
      {
        image: "./traits/lips/B_LIP.png",
        value: "B_LIP.png",
        weight: 1,
      },
      {
        image: "./traits/lips/B_LIP3.png",
        value: "B_LIP3.png",
        weight: 1,
      },
      {
        image: "./traits/lips/B_SIGARETTE.png",
        value: "B_SIGARETTE.png",
        weight: 1,
      },
      {
        image: "./traits/lips/W_LIP.png",
        value: "W_LIP.png",
        weight: 1,
      },
      {
        image: "./traits/lips/W_LIP3.png",
        value: "W_LIP3.png",
        weight: 1,
      },
      {
        image: "./traits/lips/W_SIGARETTE.png",
        value: "W_SIGARETTE.png",
        weight: 1,
      },
    ],
  },
  {
    type: "Eyes",
    options: [
      {
        image: "./traits/eyes/3D_GLASSES.png",
        value: "3D_GLASSES.png",
        weight: 1,
      },
      {
        image: "./traits/eyes/CRYING_EYES.png",
        value: "CRYING_EYES.png",
        weight: 1,
      },
      {
        image: "./traits/eyes/EYE.png",
        value: "EYE.png",
        weight: 1,
      },
      {
        image: "./traits/eyes/GLASSES.png",
        value: "GLASSES.png",
        weight: 1,
      },
      {
        image: "./traits/eyes/SICK_EYES.png",
        value: "SICK_EYES.png",
        weight: 1,
      },
      {
        image: "./traits/eyes/plague_mask.png",
        value: "plague_mask.png",
        weight: 1,
      },
      {
        image: "./traits/eyes/AVIATORS.png",
        value: "AVIATORS.png",
        weight: 1,
      },
      {
        image: "./traits/eyes/CYBER.png",
        value: "CYBER.png",
        weight: 1,
      },
      {
        image: "./traits/eyes/GET_HIGH.png",
        value: "GET_HIGH.png",
        weight: 1,
      },
      {
        image: "./traits/eyes/PAPER_BAG.png",
        value: "PAPER_BAG.png",
        weight: 1,
      },
      {
        image: "./traits/eyes/SWAG_GLASSES.png",
        value: "SWAG_GLASSES.png",
        weight: 1,
      },
    ],
  },
];

module.exports = config;
