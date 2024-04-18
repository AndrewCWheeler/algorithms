const decimalToBaseN = (d, b) => {
  let result = [];
  const divide = (d) => {
    let m = d % b;
    result.push(m);
    let y = d - Math.floor(d / b);
    if (y < 0) return divide(y);
    else result.push(d);
  };
  divide(d);
  return result;
};

console.log(decimalToBaseN(10975, 16));
