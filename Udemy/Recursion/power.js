const power = (b, x) => {
  if (x === 0) return 1;
  return b * power(b, x - 1);
};

console.log(power(2, 2));
