//event helpers

//variables

//boolean compound conditons
let eventConditions = {
  drawingConditon: null,

  drawRectangleCondition: null,
  drawEllipseCondition: null,
  drawTriangleCondition: null,
  drawHeartCondition: null,
  
  clickedImage: null,
  imgClicked: null,
  scissorsBtnSelected: null,
  horizontalSelected: null,
};

function EventHelpers() {
  //private variables
  this.drawRectangle = false;
  this.drawEllipse = false;

  this.drawTriangle = false;
  this.drawHeart = false;

  //image and stamp condition
  eventConditions.imgClicked = false;

  // button conditons
  eventConditions.cropBtnSelected = false;
  eventConditions.horizontalSelected = false;

  //shapes conditions
  eventConditions.drawRectangleCondition =
    this.drawRectangle &&
    !this.drawEllipse &&
    !this.drawTriangle &&
    !this.drawHeart;
   
  eventConditions.drawEllipseCondition =
    !this.drawRectangle &&
    this.drawEllipse &&
    !this.drawTriangle &&
    !this.drawHeart;
  
  eventConditions.drawTriangleCondition =
    !this.drawRectangle &&
    !this.drawEllipse &&
    this.drawTriangle &&
   !this.drawHeart;
 
  eventConditions.drawHeartCondition =
    !this.drawRectangle &&
    !this.drawEllipse &&
    !this.drawTriangle &&
    !this.drawHeart;
      
  /* singleton array containing
    all the related arrays */
  let selectorArrays = {
    /* object array containing references
        to where the images are stored */
    stampIDsArray: [
      {
        name: "#smiley face stamp",
        clickedImg: imageProperties.stamp_images[1],
      },
      {
        name: "#heart stamp",
        clickedImg: imageProperties.stamp_images[2],
      },
      {
        name: "#star stamp",
        clickedImg: imageProperties.stamp_images[3],
      },
    ],
    /* shapes id array containing the id selectors
          referencing the images to be displayed on box options */
    shapesIDArray: [
      "#shape_ellipse",
      "#shape_triangle",
      "#shape_rectangle",
      "#shape_heart",
      
    ],


    buttonsSelectorArray: ["#crop_btn", "#horizontal_btn"],
  };


//Methods

  /* Delegating all the mouse click related events
      regarding buttons to one function */
  document.addEventListener(
    "click",
    function (event) {
      if (event.target.matches(".clear")) {
        background("#f3f9fb");
        loadPixels();
      }

      if (event.target.matches(".save")) {
        saveCanvas("picture", "jpg");
      }

      if (event.target.matches(".reload")) {
        location.reload();
      }

      if (event.target.matches(".shapes")) {
        fill(getRandomValue());
      }
    },
    false
  );

  for (let key in selectorArrays) {
    if (selectorArrays.hasOwnProperty(key)) {
      if (key == "stampIDsArray") {
        for (let i = 0; i < selectorArrays.stampIDsArray.length; i++) {
          /* the following JQuery deals with images and setting when to draw them on the canvas */
          select(selectorArrays.stampIDsArray[i].name).mouseClicked(function () {
            eventConditions.imgClicked = true;
            eventConditions.clickedImage =
              selectorArrays.stampIDsArray[i].clickedImg;
          });
        }
      }

      if (key == "shapesIDArray") {
        for (let j = 0; j < selectorArrays.shapesIDArray.length; j++) {
          /* the following JQuery deals with geometric shapes and setting when to draw them on the canvas */
          select(selectorArrays.shapesIDArray[j]).mouseClicked(function () {
            if (selectorArrays.shapesIDArray[j] == "#shape_ellipse") {
              this.drawRectangle = false;
              this.drawHeart = false;
              this.drawTriangle = false;
              this.drawEllipse = true;
             
              //conditions
              eventConditions.drawHeartCondition = false;
              eventConditions.drawTriangleCondition = false;
              eventConditions.drawRectangleCondition = false;
             

              /* set the draw ellipse conditon to true*/
              eventConditions.drawEllipseCondition = true;
            }
            if (selectorArrays.shapesIDArray[j] == "#shape_triangle") {
              this.drawRectangle = false;
              this.drawTriangle = true;
              this.drawHeart = false;
              this.drawEllipse = false;
           

              //conditions
              eventConditions.drawHeartCondition = false;
              eventConditions.drawEllipseCondition = false;
              eventConditions.drawRectangleCondition = false;

              /*set the draw triangle conditon to true */
              eventConditions.drawTriangleCondition = true;
            }
            if (selectorArrays.shapesIDArray[j] == "#shape_rectangle") {
              this.drawRectangle = true;
              this.drawTriangle = false;
              this.drawHeart = false;
              this.drawEllipse = false;
              
              //conditions
              eventConditions.drawHeartCondition = false;
              eventConditions.drawEllipseCondition = false;
              eventConditions.drawTriangleCondition = false;
             

              /* set the draw rectangle conditon to true
               */
              eventConditions.drawRectangleCondition = true;
            }

            if (selectorArrays.shapesIDArray[j] == "#shape_heart") {
              this.drawRectangle = false;
              this.drawTriangle = false;
              this.drawHeart = true;
              this.drawEllipse = false;
             

              //conditions
              eventConditions.drawRectangleCondition = false;
              eventConditions.drawEllipseCondition = false;
              eventConditions.drawTriangleCondition = false;
             

              /* set the draw heart conditon to true */
              eventConditions.drawHeartCondition = true;
            }
          });
        }
      }

      if (key == "buttonsSelectorArray") {
        for (let n = 0; n < selectorArrays.buttonsSelectorArray.length; n++) {
          /* the following JQuery deals with the crop button
                    and setting when to draw it on the canvas */
          select(selectorArrays.buttonsSelectorArray[n]).mouseClicked(
            function () {
              if (selectorArrays.buttonsSelectorArray[n] == "#crop_btn") {
                eventConditions.cropBtnSelected = true;
              }

              if (selectorArrays.buttonsSelectorArray[n] == "#horizontal_btn") {
                eventConditions.horizontalSelected = true;
              }
            }
          );
        }
      }
    }
  }
}
