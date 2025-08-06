function stamptool() {
  this.name = "stamptool"; 
  this.icon = "assets/stamp.jpg";
  this.size = 50;
  this.currentStamp = loadImage("assets/smileyface.jpg"); // default image

  this.setStamp = function (imgSrc) {
    console.log("Switching stamp to:", imgSrc);
    loadImage(imgSrc, (img) => {
      this.currentStamp = img;
    }, () => {
      console.error("Failed to load:", imgSrc);
    });
  };

  this.draw = function () {
    if (mouseIsPressed) {
      const x = mouseX - this.size / 2;
      const y = mouseY - this.size / 2;
      image(this.currentStamp, x, y, this.size, this.size);
    }
  };
}
