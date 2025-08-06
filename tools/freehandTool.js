// free hand tool


function FreeHandTool() {
  this.icon = "assets/freehand.jpg";
  this.name = "Free Hand Tool";

  this.previousMouseX = -1;
  this.previousMouseY = -1;

 // method
  this.draw = function () {
    if (mouseIsPressed) {
      if (this.previousMouseX == -1) {
        this.previousMouseX = mouseX;
        this.previousMouseY = mouseY;
      } else {
        line(this.previousMouseX, this.previousMouseY, mouseX, mouseY);
        this.previousMouseX = mouseX;
        this.previousMouseY = mouseY;
      }
    } else {
      this.previousMouseX = -1;
      this.previousMouseY = -1;
    }
  };
}
