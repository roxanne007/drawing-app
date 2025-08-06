//drawing helpers

let drawingProperties = {
  weight: 5,
  sliderValue: 15,
  colourInput: getRandomValue(),
  backgroundColour: "#FFFFFF",
  startHelper: null,
};

//variables

let imageProperties = {
  stamp_images: [
    "assets/heart.jpg",
    "assets/smileyface.jpg",
    "assets/star.jpg",
  ],

};

//method

/*
The weight of the stroke / and or size of an item is changed depending on the
value you retrieved from the slider
*/
function displaySliderValue(val) {
  drawingProperties.sliderValue = document.getElementById(
    "output"
  ).innerHTML = parseInt(val);
  drawingProperties.weight = drawingProperties.sliderValue;
  strokeWeight(drawingProperties.weight);
}

/*
Generates a random hex colour
*/
function getRandomValue() {
  let letters = "0123456789ABCDEF";
  let colour = "#";
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}


