const toBinary = (n) => {
  if (n === 0) return 0;
  if (!Number.isInteger(n)) return "Only Integers currently allowed!";
  const writeBinary = (l) => {
    const binaryArray = [];
    for (let i = l; i >= 0; i--) {
      if (n - Math.pow(2, i) >= 0) {
        binaryArray.push(1);
        n = n - Math.pow(2, i);
      } else binaryArray.push(0);
    }
    binaryArray[0] === 0 ? binaryArray.shift() : null;
    let results = binaryArray.join("");
    return results;
  };

  let count = 0;
  const findDigitalLength = (n) => {
    while (Math.pow(2, count) < n) {
      count++;
    }
    return count;
  };
  let digitalLength = findDigitalLength(n);
  return writeBinary(digitalLength);
};

console.log(toBinary(10));
