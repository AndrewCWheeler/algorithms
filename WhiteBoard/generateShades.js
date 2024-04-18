function lightenOrDarken(hex, darkness) {
  // The same lightenOrDarken function from your previous code

  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  r = Math.max(0, Math.min(255, r - darkness));
  g = Math.max(0, Math.min(255, g - darkness));
  b = Math.max(0, Math.min(255, b - darkness));

  return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
}

function generateShades(initialHex, n, variation) {
  initialHex = initialHex.toUpperCase();
  const shades = [];
  let step = (255 / (n - 1)) * (variation / 10);

  for (let i = 0; i < n - 1; i++) {
    const darkness = (n - i - 1) * step; // Ensure the darkest is the last
    let shade = lightenOrDarken(initialHex, darkness);

    // Ensure the generated shade is unique
    while (shades.includes(shade) || shade === initialHex) {
      shade = lightenOrDarken(initialHex, darkness + step);
      step += 1; // Increase step for uniqueness
    }

    shades.push(shade);
    step = (255 / (n - 1)) * (variation / 10); // Reset step for the next iteration
  }

  shades.push(initialHex); // Add the initial hex as the darkest shade
  return shades;
}

// Example usage
const initialHex = "#FF0000";
const numberOfShades = 10;
const variation = 7;
const shadesArray = generateShades(initialHex, numberOfShades, variation);

console.log(shadesArray);
