// for use in p5.js to draw a goldenRatio arc from the bottom left
// corner of a square to the top right corner of the same square.

const getGoldenRatioArcPoints = (x1, x2, y1, y2, segments) => {
  let result = [];
  const a = (Math.sqrt(5) - 1) / 2;
  const r = (x2 - x1) / 2;
  const centerX = x1 + r;
  const centerY = y2 - r;

  for (let i = 0; i <= segments; i++) {
    const angle = Math.PI * (1 - a * (2 * i + 1));
    const x = centerX + r * Math.cos(angle);
    const y = centerY - r * Math.sin(angle);

    if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
      result.push({ x: x, y: y });
    }
  }
  return result;
};

const curveVertices = getGoldenRatioArcPoints(100, 718, 718, 100, 12);
console.log(curveVertices);

// beginShape();
// for (let i = 0; i < curveVertices.length; i++) {
//   curveVertex(curveVertices[i].x, curveVertices[i].y);
// }
// endShape();
