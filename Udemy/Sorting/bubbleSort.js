const swap = (arr, x, y) => {
  let t = arr[x];
  arr[x] = arr[y];
  arr[y] = t;
};

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

console.log(bubbleSort([3, 2, 1, 4, 5]));
