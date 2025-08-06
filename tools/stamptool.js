function StampTool() {
  this.name = "stampTool";
  this.icon = "assets/stamp.jpg";
  this.size = 50;
  this.currentStamp = loadImage("assets/smileyface.jpg"); // default

  this.draw = function () {
    if (mouseIsPressed) {
      let x = mouseX - this.size / 2;
      let y = mouseY - this.size / 2;
      image(this.currentStamp, x, y, this.size, this.size);
    }
  };

  this.setStamp = function (src) {
    this.currentStamp = loadImage(src);
  };
}
