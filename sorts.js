// Write a function to perform bubble sort.

// The basic idea for bubble sort is that you want to iterate through
// the entire array, looking at 2 elements, and swapping them if the left
// one is greater than the right one. Basically, we're having each element
// "bubble up" until the array is sorted.


// Bubble Sort with a do while loop:
var Array1 = [4,6,2,10,5,8]

function bubbleSort(arr) 
{
    let len = arr.length;
    let swapped;
    do
    {
        swapped = false;
        for (let i = 0; i < len; i++) 
        {
            if (arr[i] > arr[i + 1]) 
            {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } 
    
    while (swapped);
    return arr;
}

console.log(bubbleSort(Array1));


// Bubble Sort with a nested for loop:
var Array2 = [7, 12, 8, 10, 2, 4]

bubbleSort2 = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++){
        for (let j = 0; j < (len - i - 1); j++) {
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}
console.log(bubbleSort2(Array2));

// Write a function to perform selection sort:
// arr[] = 64 25 12 22 11

// Find the minimum element in arr[0...4]
// and place it at beginning
// 11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
// 11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
// 11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
// 11 12 22 25 64 

var arr = [64,25,25,22,12,11]
function selectionSort(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++)
    {
        let min = i;
        for(let j = i + 1; j < len; j++)
        {
            if (arr[min] > arr[j])
            {
                min = j;
            }
        }
            if (min !== i){
                let tmp = arr[i];
                arr[i] = arr[min];
                arr[min] = tmp;
            }
    }
    return arr; 
}
console.log(selectionSort(arr));