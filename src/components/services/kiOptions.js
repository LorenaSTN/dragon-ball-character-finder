function kiOptions() {
  return [
    { label: "0", value: 0 },
    { label: "1 Thousand", value: 1e3 },
    { label: "1 Million", value: 1e6 },
    { label: "1 Billion", value: 1e9 },
    { label: "1 Trillion", value: 1e12 },
    { label: "1 Quadrillion", value: 1e15 },
    { label: "1 Quintillion", value: 1e18 },
    { label: "1 Septillion", value: 1e24 },
    { label: "1 Googolplex", value: Infinity },
  ];
}

export default kiOptions;