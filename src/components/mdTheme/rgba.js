export default function(hex, opacity) {
  let r = '';
  let g = '';
  let b = '';
  let match = hex.toString().match(/^#?(([0-9a-zA-Z]{3}){1,3})$/);

  if (!match) {
    throw new Error('Invalid color' + hex);
  }

  hex = match[1];

  if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else if (hex.length === 3) {
    let rSubstring = hex.substring(0, 1);
    let gSubstring = hex.substring(1, 2);
    let bSubstring = hex.substring(2, 3);

    r = parseInt(rSubstring + rSubstring, 16);
    g = parseInt(gSubstring + gSubstring, 16);
    b = parseInt(bSubstring + bSubstring, 16);
  }

  if (opacity) {
    if (opacity > 1) {
      opacity = opacity / 100;
    }

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
}
