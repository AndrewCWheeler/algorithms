// Multiple Pointers - averagePair

// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average. There may be more
// than one pair that matches the average target.

function averagePair(arr, avg) {
    const getAvg = (x, y) => {
        let result = 0;
        let sum = x + y;
        result = sum / 2;
        return result;
    }
    let i = 0, j = arr.length - 1;
    while (i < j) {
        let currentAvg = getAvg(arr[i], arr[j]);
        if (currentAvg === avg) return true;
        if (currentAvg < avg) i++;
        if (currentAvg > avg) j--;
    }
    return false;
}