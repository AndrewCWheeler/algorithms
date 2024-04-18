const convertToBinary = (n) => {
  // handle edge cases; return 0 if n is 0 and only allow whole numbers:
  if (n === 0) return 0;
  if (!Number.isInteger(n)) return 'Only Integers currently allowed!';

  // final function to return; assembles an array of 1's and 0's based on
  // the result of n reduced by the next sequential power of 2
  const writeBinary = (l) => {
    const binaryArray = [];
    for (let i = l; i >= 0; i--) {
      if (n - Math.pow(2, i) >= 0) {
        binaryArray.push(1);
        n = n - Math.pow(2, i);
      } else binaryArray.push(0);
    }
    binaryArray[0] === 0 ? binaryArray.shift() : null;
    let results = binaryArray.join('');
    return results;
  };

  // find the "digital length" of the binary number, determined by the largest
  // possible power of 2 that does not reduce n by more than n
  let count = 0;
  const findDigitalLength = (n) => {
    while (Math.pow(2, count) < n) {
      count++;
    }
    return count;
  };
  let digitalLength = findDigitalLength(n);

  // call the "writeBinary" function by passing in the digital length;
  return writeBinary(digitalLength);
};

// console.log(toBinary(37));

// console.log(390 % 16);

console.log(convertToBinary(70));
