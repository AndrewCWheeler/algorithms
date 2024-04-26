const greatestCommonFactor = (a: number, b: number) => {
  if (a > b) {
    a = Math.abs(a);
    b = Math.abs(b);
  } else {
    let bCopy = b;
    let aCopy = a;
    a = Math.abs(bCopy);
    b = Math.abs(aCopy);
  }
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

console.log(greatestCommonFactor(45, 54));
