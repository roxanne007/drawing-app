// drawinghelpers.js

// Global drawing properties used across tools
let drawingProperties = {
  weight: 5,
  sliderValue: 15,
  colourInput: getRandomValue(),
  backgroundColour: "#FFFFFF",
  startHelper: null,
};

// Stamp image properties
let imageProperties = {
  stamp_images: [
    "assets/heart.jpg",
    "assets/smileyface.jpg",
    "assets/star.jpg",
  ],
};

// Display and set slider value for brush/tool size
function displaySliderValue(val) {
  drawingProperties.sliderValue = parseInt(val);
  document.getElementById("output").innerHTML = drawingProperties.sliderValue;
  drawingProperties.weight = drawingProperties.sliderValue;
  strokeWeight(drawingProperties.weight);
}

// Generate a random hex colour
function getRandomValue() {
  let letters = "0123456789ABCDEF";
  let colour = "#";
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}
