// Reverse a string in place.

const reverseString = (str) => {
  let arr = str.split("");

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  let result = arr.join("");
  return result;
};

console.log(reverseString("apple"));

const objects = [
  { key: 1, val: 4 },
  { key: 2, val: 5 },
  { key: 3, val: 8 },
  { key: 4, val: 3 },
  { key: 5, val: 5 },
];

const sorted = objects.sort((a, b) => a.val - b.val);

console.log(sorted);
