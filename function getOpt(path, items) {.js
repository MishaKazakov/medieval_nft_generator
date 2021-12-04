function getOpt(path, itemsString) {
  const items = itemsString.split(/\s/).filter(Boolean);
  return items.map((str) => ({
    image: `./traits/${path}/${str}`,
    value: `${path}`,
    weight: 1,
  }));
}
