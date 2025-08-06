// eraser tool


function EraserTool() {
  this.icon = "assets/eraser.jpg";
  this.name = "Eraser Tool";

  var previousMouseX = -1;
  var previousMouseY = -1;

  this.draw = function () {
      //if the mouse is pressed
    if (mouseIsPressed && drawingProperties.sliderValue != null) {
    //check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
        if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
      } else {
        /* setting the eraser tool removed area to be
                            the same as the background colour */
//        if (drawingProperties.backgroundColour == "#fff3e2") {
//          stroke(drawingProperties.backgroundColour);
        {  fill(255,255,255);
      noStroke();
      ellipse(mouseX, mouseY, 100, 100);
        }
        
        //if we already have values for previousX and Y we can draw a line from 
       //there to the current mouse location
        strokeWeight(drawingProperties.sliderValue);
        line(previousMouseX, previousMouseY, mouseX, mouseY);
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
    } else {
      previousMouseX = -1;
      previousMouseY = -1;
    }
  };
}

