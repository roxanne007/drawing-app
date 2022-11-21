//Crop tool

function CropTool() {
  this.icon = "assets/scissors.jpg";
  this.name = "Crop Tool";
  this.button = document.getElementById("crop_btn");

  this.startMouseX = -1;
  this.startMouseY = -1;
  this.drawing = false;

//method
  this.draw = function () {
    if (mouseIsPressed && drawingProperties.sliderValue != null) {
      //make the crop button visible
      this.button.style.visibility = "visible";

      if (this.startMouseX == -1) {
        this.startMouseX = mouseX;
        this.startMouseY = mouseY;
        this.drawing = true;
        loadPixels();
      } else {
        if (eventConditions.cropBtnSelected) {
          updatePixels();
          {
            noStroke();
            //make the fill colour for the crop area to be white
            fill("#ffffff");
          }
          strokeWeight(drawingProperties.sliderValue);
          rect(this.startMouseX, this.startMouseY, mouseX, mouseY);
        }
      }
    } else if (this.drawing) {
      loadPixels();
      this.drawing = false;
      this.startMouseX = -1;
      this.startMouseY = -1;
    }
  };

  this.unselectTool = function () {
    updatePixels();
    /* make the cut button's visibility hidden once the tool
              has been unselected */
    this.button.style.visibility = "hidden";
  };
}
