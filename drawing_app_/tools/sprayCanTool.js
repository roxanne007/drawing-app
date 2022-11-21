
//Spray can tool


function SprayCanTool() {
  this.icon = "assets/spraycan.jpg";
  this.name = "Spray Can Tool";

  this.points = drawingProperties.sliderValue;
  this.spread = drawingProperties.sliderValue + 10;

 // method
  this.draw = function () {
    if (mouseIsPressed && drawingProperties.sliderValue != null) {
      for (let i = 0; i < this.points; i++) {
        point(
          random(mouseX - this.spread, mouseX + this.spread),
          random(mouseY - this.spread, mouseY + this.spread)
        );
      }
    }
  };
}
