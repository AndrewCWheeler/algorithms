const minesweeper = (matrix) => {
  let mines = [];

  const sweep = (m, y, x) => {
    let temp = 0;
    let l = m[y].length;
    console.log(m[y].length);
    if (m[y - 1] !== undefined) {
      if (x > 0 && m[y - 1][x - 1]) temp++, console.log("830");
      if (m[y - 1][x] !== undefined && m[y - 1][x] === true)
        temp++, console.log("831");
      if (m[y - 1][x + 1] !== undefined && m[y - 1][x + 1] === true)
        temp++, console.log("832");
    }
    if (m[y] !== undefined) {
      if (m[y][x - 1] !== undefined && m[y][x - 1] === true)
        temp++, console.log("835");
      if (m[y][x + 1] !== undefined && m[y][x + 1] === true)
        temp++, console.log("836");
    }
    if (m[y + 1] !== undefined) {
      if (m[y + 1][x - 1] !== undefined && m[y + 1][x - 1] === true)
        temp++, console.log("839");
      if (m[y + 1][x] !== undefined && m[y + 1][x] === true)
        temp++, console.log("840");
      if (m[y + 1][x + 1] !== undefined && m[y + 1][x + 1] === true)
        temp++, console.log("841");
    }
    console.log(temp);
    let final = temp;
    temp = 0;
    return final;
  };
  for (let y = 0; y < matrix.length; y++) {
    mines[y] = [];
    for (let x = 0; x < matrix[y].length; x++) {
      console.log(y, x);
      mines[y].push(sweep(matrix, y, x));
      console.log(mines);
      console.log(matrix);
    }
  }
  return mines;
};

console.log(
  minesweeper([
    [true, false, false, true],
    [false, false, true, false],
    [true, true, false, true],
  ])
);
