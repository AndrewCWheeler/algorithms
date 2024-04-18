const maxDecimalFromBinary = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.pow(2, i);
  }
  return sum;
};

console.log(maxDecimalFromBinary(4));

console.log(3726 % 8);
