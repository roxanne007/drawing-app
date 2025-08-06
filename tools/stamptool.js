function StampTool() {
  this.name = "stampTool";
  this.icon = "assets/stamp.jpg";
  this.size = 50;
  this.currentStamp = loadImage("assets/smileyface.jpg"); // default stamp

  this.setStamp = function (imgSrc) {
    loadImage(imgSrc, (img) => {
      this.currentStamp = img;
    });
  };

  this.draw = function () {
    if (mouseIsPressed && this.currentStamp) {
      let x = mouseX - this.size / 2;
      let y = mouseY - this.size / 2;
      image(this.currentStamp, x, y, this.size, this.size);
    }
  };
}
