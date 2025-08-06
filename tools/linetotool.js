// Line to tool


function LineToTool() {
  this.icon = "assets/lineto.jpg";
  this.name = "Draw Line Tool";

  this.startMouseX = -1;
  this.startMouseY = -1;
  this.drawing = false;

  // method
  this.draw = function () {
    if (mouseIsPressed) {
      if (this.startMouseX == -1) {
        this.startMouseX = mouseX;
        this.startMouseY = mouseY;
        this.drawing = true;

        loadPixels();
      } else {
        updatePixels();
        line(this.startMouseX, this.startMouseY, mouseX, mouseY);
      }
    } else if (this.drawing) {
      loadPixels();
      this.drawing = false;
      this.startMouseX = -1;
      this.startMouseY = -1;
    }
  };
}

