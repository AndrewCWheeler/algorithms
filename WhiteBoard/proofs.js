const integerSquaredIsEven = (n) => {
  let s = n * n;
  return s % 2 === 0;
};

// console.log(integerSquaredIsEven(9));

const intIsEven = (x) => {
  let isEven = x % 2 === 0;
  if (isEven) {
    console.log('x is even');
    if ((5 * x + 2) % 2 === 0) {
      console.log('a: true');
    } else console.log('a: false');
    console.log(`b: ${(Math.pow(x, 3) - x) % 2 === 0} `);
    console.log(`c: ${Math.pow(x, 3) % 2 !== 0}`);
    console.log('d: NA');
  } else {
    console.log('x is odd');
    console.log('a: NA');
    console.log(`b: ${(Math.pow(x, 3) - x) % 2 === 0} `);
    console.log('c: NA');
    if ((3 * x + 3) % 2 === 0) {
      console.log('d: true');
    } else console.log('d: false');
  }
};

// console.log(intIsEven(8));

const evenPlusOddIsOdd = (n) => {
  if (n <= 0) return undefined;
  n = Math.ceil(n);
  let startTime = performance.now();
  let count = 0;
  let cases = n;
  let x,
    y = 0;
  const checkCriteria = (a, b) => {
    if (a % 2 !== 0 && b % 2 === 0) {
      return true;
    }
    if (a % 2 === 0 && b % 2 !== 0) {
      return true;
    }
    return false;
  };
  for (let i = 0; i < n; i++) {
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    x = Math.floor(Math.random() * 1000 + 1) * plusOrMinus;
    y = Math.floor(Math.random() * 1000 + 1) * plusOrMinus;
    let meetsCriteria = checkCriteria(x, y);
    let result = (x + y) % 2 !== 0;
    if (meetsCriteria && result) count += 1;
    else if (!meetsCriteria) {
      cases -= 1;
    } else if (meetsCriteria && !result) {
      count -= 1;
    }
  }
  let endTime = performance.now();
  console.log(
    `Finished calculation for ${n} cases in ${(
      (endTime - startTime) /
      1000
    ).toFixed(2)} seconds.`
  );
  return count === cases;
};

console.log(evenPlusOddIsOdd(100000000));
