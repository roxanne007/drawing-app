/*
START HELPERS FUNCTIONS
************
Sets up the necessary
starter functions.
*/

function StartHelpers() {
 //variables
  let toolbox;

//method

  /* set up all the tools for the drawing 
      application */
  this.setupTools = function () {
    canvasContainer = select("#content");
    let canvas = createCanvas(
      canvasContainer.size().width,
      canvasContainer.size().height
    );
    canvas.parent("content");
    frameRate();

    //instantiate the necessary helper functions
    helpers = new EventHelpers();
    colourP = new ColourPalette();
    toolbox = new Toolbox();

    //place the tools in an array and instantiate them
    tools = [
      new FreeHandTool(),
      new SprayCanTool(),
      new LineToTool(),
      new ShapesTool(),
      new StampTool(),
      new CropTool(),
      new EraserTool(),
      new MirrorDrawTool(),

    ];

    /* iterate through the elements in the tools array and then add them to  
        the tool box */
    for (let k = 0; k < tools.length; k++) {
      toolbox.addTool(tools[k]);
    }

    /* add title attributes to all the images that the toolbox uses */
    toolbox.addTitle(tools);

    //set the background colour to a default value
    background(drawingProperties.backgroundColour);
  };

  /* 
  ************************************ 
      
            GETTERS 
      
  ************************************
  */

  this.getToolBox = function () {
    if (toolbox != null || toolbox != undefined) {
      return toolbox;
    }
  };
}
