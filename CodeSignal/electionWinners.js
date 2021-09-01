

const electionWinners = (votes, k) => {
    // get the max in the votes array:
    let max = -Infinity;
    for (let c of votes) {
        if (c > max) {
            max = c;
        }
    }

    // determine the maxCount:
    let obj = {};
    let maxCount = 0;
    for (let x of votes) {
        obj[x] = obj[x] ? obj[x] += 1 : 1;
    }
    for (let y of votes) {
        if (y == max) {
            maxCount = obj[y];
        }
    }

    // apply conditions:
    let count = 0;
    if (k === 0 && maxCount === 1) return 1;
    for (let z of votes) {
        if (z + k > max) {
            count++;
        }
    }
    return count;
}

console.log(electionWinners([2, 3, 5, 2], 3));