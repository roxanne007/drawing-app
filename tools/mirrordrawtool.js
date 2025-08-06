// mirror tool


function MirrorDrawTool() {
  this.icon = "assets/mirrordraw.jpg";
  this.name = "Mirror Draw Tool";

  this.axis = "x";
  this.lineOfSymmetry = width / 2;
  let self = this;

  this.elements = document.getElementsByClassName("direction");
  this.previousMouseX = -1;
  this.previousMouseY = -1;

  this.previousOppositeMouseX = -1;
  this.previousOppositeMouseY = -1;

//  method
  this.draw = function () {
    updatePixels();

    if (mouseIsPressed) {
      //make the direction buttons visible
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].style.visibility = "visible";
      }

      if (this.previousMouseX == -1) {
        this.previousMouseX = mouseX;
        this.previousMouseY = mouseY;

        this.previousOppositeMouseX = this.calculateOpposite(mouseX, "x");
        this.previousOppositeMouseY = this.calculateOpposite(mouseY, "y");
      } else {
        line(this.previousMouseX, this.previousMouseY, mouseX, mouseY);
        this.previousMouseX = mouseX;
        this.previousMouseY = mouseY;

        let oX = this.calculateOpposite(mouseX, "x");
        let oY = this.calculateOpposite(mouseY, "y");

        line(this.previousOppositeMouseX, this.previousOppositeMouseY, oX, oY);
        this.previousOppositeMouseX = oX;
        this.previousOppositeMouseY = oY;
      }
    } else {
      this.previousMouseX = -1;
      this.previousMouseY = -1;

      this.previousOppositeMouseX = -1;
      this.previousOppositeMouseY = -1;
    }

    if (eventConditions.horizontalSelected) {
      self.axis = "y";
      self.lineOfSymmetry = height / 2;
    }

    loadPixels();
    push();
    strokeWeight(3);
    stroke("#383e56");

    if (this.axis == "x") {
      line(width / 2, 0, width / 2, height);
    } else {
      line(0, height / 2, width, height / 2);
    }
    pop();
  };

  this.calculateOpposite = function (n, a) {
    if (a != this.axis) {
      return n;
    }

    if (n < this.lineOfSymmetry) {
      return this.lineOfSymmetry + (this.lineOfSymmetry - n);
    } else {
      return this.lineOfSymmetry - (n - this.lineOfSymmetry);
    }
  };

  this.unselectTool = function () {
    updatePixels();
    //make the direction buttons hidden once the
    //tool has been unselected
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.visibility = "hidden";
    }
  };
}

