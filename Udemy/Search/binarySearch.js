const binarySearch = (arr, val) => {
  // let left = arr[0]
  let right = arr[arr.length - 1];
  let middle = Math.round(arr.length / 2);
  if (arr[middle] === val) return true;
  if (val < middle) {
    return binarySearch(arr.slice(middle), val);
  }
  if (val > middle) {
    return binarySearch(arr.slice(middle, right), val);
  }
  return false;
};

console.log(binarySearch([1, 2, 4, 5, 7, 8], 5));
