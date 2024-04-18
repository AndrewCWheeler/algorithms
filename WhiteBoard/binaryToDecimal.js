const binaryToDecimal = (n) => {
  let binaryArray = n.toString().split('');
  let binaryLength = binaryArray.length - 1;
  let decimal = 0;
  for (let i = 0; i < binaryArray.length; i++) {
    binaryArray[i] = Number(binaryArray[i]);
    if (binaryArray[i] === 1) {
      decimal = decimal += Math.pow(2, binaryLength);
      binaryLength--;
    } else binaryLength--;
  }

  return decimal;
};

let a = binaryToDecimal(1110);
let b = binaryToDecimal(101);
let c = a * b;

console.log(c);
