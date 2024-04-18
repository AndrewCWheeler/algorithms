const allPerfectSquare = (n) => {
  let result = [];
  for (let i = n; i > 0; i--) {
    let x = Math.sqrt(i);
    if (x === Math.floor(x)) {
      result.push(i);
    }
  }
  return result;
};

let perfectSquared = allPerfectSquare(2310);

const allPerfectCube = (n) => {
  let result = [];
  for (let i = n; i > 0; i--) {
    let x = Math.cbrt(i);

    if (x === Math.floor(x)) {
      result.push(i);
    }
  }
  console.log(result);
  return result;
};

let perfectCubed = allPerfectCube(2310);

const getIntersection = (a, b) => {
  let intersection = new Set();
  a.forEach((el) => {
    if (b.has(el)) {
      intersection.add(el);
    }
  });
  return intersection;
};

const removeIntersection = (union, intersection) => {
  for (let el of intersection) {
    if (union.has(el)) {
      union.delete(el);
    }
  }
  return union;
};

const applyInclusionExclusionPrinciple = (a, b) => {
  let union = new Set();
  let setA = new Set(a);
  let setB = new Set(b);

  for (let el of setA) {
    union.add(el);
  }
  for (let el of setB) {
    union.add(el);
  }
  let intersection = getIntersection(setA, setB);
  let result = removeIntersection(union, intersection);
  let sortedResult = Array.from(result).sort((a, b) => b - a);

  return sortedResult;
};

let finalResult = applyInclusionExclusionPrinciple(
  perfectSquared,
  perfectCubed
);

console.log(finalResult);

const kilometerToMile = (km, mile) => {
  return (km / 1.609344);
}

const milePaceFromKm = (time, distance)