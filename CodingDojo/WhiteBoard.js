// 2. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

const moveForward = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = 0;
  return arr;
};

console.log(moveForward([1, 2, 3]));

const returnReversed = arr => {
  let end = arr.length - 1;
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[end - i]] = [arr[end - i], arr[i]];
  }
  return arr;
};

console.log(returnReversed([1, 2, 3]));
