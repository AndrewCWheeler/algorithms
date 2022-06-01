const merge = (arr1, arr2) => {
  let newArr = [];
  if (arr1.length > arr2.length) {
    merge(arr2, arr1);
  }
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
  }

  return newArr;
};

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
