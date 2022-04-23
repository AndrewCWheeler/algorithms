const selectionSort = (arr) => {
  const swap = (arr, x, y) => {
    let t = arr[x];
    arr[x] = arr[y];
    arr[y] = t;
  };
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
};

console.log(selectionSort([4, 3, 5, 6, 2, 1, 7, 9, 8]));
