// sketch.js
// Entry/Gateway script for Drawing App

function preload() {
  // Ensure drawingProperties is defined before using it
  if (typeof drawingProperties === "undefined") {
    window.drawingProperties = {};
  }

  drawingProperties.startHelper = new StartHelpers();
  // Optional: preload images if needed later
  // drawingProperties.startHelper.preloadImages();
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
