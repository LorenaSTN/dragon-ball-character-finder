function parseKi(kiString) {
  if (typeof kiString !== "string") return 0;

  const units = {
    thousand: 1e3,
    million: 1e6,
    billion: 1e9,
    trillion: 1e12,
    quadrillion: 1e15,
    quintillion: 1e18,
    septillion: 1e24,
    googolplex: Infinity,
  };

  const [rawNumber, ...unitParts] = kiString
    .toLowerCase()
    .replace(/,/g, "")
    .trim()
    .split(" ");

  const unit = unitParts.join(" ");
  const number = parseFloat(rawNumber.replace(/\./g, ""));

  if (isNaN(number)) return 0;

  const multiplier = units[unit] || 1;

  return number * multiplier;
}

export default parseKi;
