const bishopAndPawn = (bishop, pawn) => {
    let bishopCode = bishop[0].charCodeAt(0);
    let pawnCode = pawn[0].charCodeAt(0);

    let bishopNum = Number(bishop[1]);
    let pawnNum = Number(pawn[1]);

    let codeDiff = Math.abs(bishopCode - pawnCode);
    let numDiff = Math.abs(bishopNum - pawnNum);

    return codeDiff === numDiff;
}

console.log(bishopAndPawn("g1", "e3"));