// Entry/Gateway script for Drawing App

// Preload assets before setup
function preload() {
  // Define drawingProperties and preload images
  if (typeof drawingProperties === "undefined") {
    window.drawingProperties = {};
  }

  // Preload stamp images
  imageProperties = {
    stamp_images: [
      loadImage("assets/heart.jpg"),
      loadImage("assets/smileyface.jpg"),
      loadImage("assets/star.jpg")
    ]
  };

  drawingProperties.startHelper = new StartHelpers();
}

function setup() {
  drawingProperties.startHelper.setupTools();

  // Clear any unnecessary console warnings
  console.clear();
}

function draw() {
  let toolbox = drawingProperties.startHelper.getToolBox();

  if (toolbox.selectedTool && typeof toolbox.selectedTool.draw === "function") {
    toolbox.selectedTool.draw();
  } else {
    alert("It looks like your selected tool doesn't have a draw function!");
  }
}
