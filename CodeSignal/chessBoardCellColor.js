// Given two cells on the standard chess board, determine whether
// they have the same color or not. Return boolean.

// Example:
// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true

// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false

function chessBoardCellColor(c1, c2) {
    let first = c1.split('');
    let second = c2.split('');
    let charCode1 = c1[0].charCodeAt(0);
    let charCode2 = c2[0].charCodeAt(0);

    if (charCode1 % 2 !== 0) {
        if (c1[1] % 2 !== 0) {
            first = true;
        } else first = false;
    }
    if (charCode1 % 2 === 0) {
        if (c1[1] % 2 !== 0) {
            first = false;
        } else first = true;
    }
    if (charCode2 % 2 !== 0) {
        if (c2[1] % 2 !== 0) {
            second = true;
        } else second = false;
    }
    if (charCode2 % 2 === 0) {
        if (c2[1] % 2 !== 0) {
            second = false;
        } else second = true;
    }
    return first === second;
}

console.log(chessBoardCellColor("A1", "C3"));
