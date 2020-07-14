// Write a function that takes 2 sorted arrays and finds the intersection of those arrays.
// The intersection is just a fancy term for the elements that are in both arrays.

// EXAMPLE:
// arr1 = [1,3,4,6]
// arr2 = [3,5,6,7]
// return = [3,6]

var arr1 = [1, 3, 4, 6]
var arr2 = [3, 5, 6, 7]

function intersection(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr3.push(arr1[i]);
            }
        }
    }
    return arr3;
}

console.log(intersection(arr1, arr2));

// 1st for loop compares arr1[0] or 1 to all of the arr2 values;
// 2nd for loop compares arr1[1] or 3 to all of the arr2 values;
// etc.



var arr4 = [1, 3, 4, 6]
var arr5 = [3, 5, 6, 6]

var arr7 = [2, 3, 4, 5, 7, 9, 12, 15,]
var arr8 = [2, 3, 7, 8, 3, 5, 12, 15, 1, 3]

function intersection2(x, y) {
    let newArr = [];
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < y.length; j++) {
            if (x[i] === y[j]) {
                newArr.push(x[i]);
                for (let k = 0; k < newArr.length; k++) {
                    if (newArr[k] === newArr[k + 1]) {
                        newArr.pop();
                    }
                }
            }
        }
    }
    return newArr;
}

console.log("This is comparing arr4 and arr5:");
console.log(intersection2(arr4, arr5));
console.log("This is comparing arr7 and arr8:");
console.log(intersection2(arr7, arr8));