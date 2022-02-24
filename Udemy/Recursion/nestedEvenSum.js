// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
let sum = 0;
const isEvenNumber = (x) => {
  return typeof x === "number" ? x % 2 === 0 : false;
};

const nestedEvenSum = (obj) => {
  let arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++) {
    // console.log(typeof arr[i]);
    console.log(arr[i]);
    if (typeof arr[i] === "object") {
      return nestedEvenSum(arr[i]);
    }
    if (isEvenNumber(arr[i])) {
      //   console.log(arr[i]);
      sum += arr[i];
      console.log(sum);
    }
  }
  return sum;
};
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));
