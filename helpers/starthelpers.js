/*
START HELPERS FUNCTIONS
************
Sets up the necessary
starter functions.
*/

function StartHelpers() {
  // variables
  let toolbox;

  // method
  this.setupTools = function () {
    canvasContainer = select("#content");
    let canvas = createCanvas(
      canvasContainer.size().width,
      canvasContainer.size().height
    );
    canvas.parent("content");
    frameRate();

    // instantiate the necessary helper functions
    helpers = new EventHelpers();
    colourP = new ColourPalette();
    toolbox = new Toolbox();

    // place the tools in an array and instantiate them
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

    // iterate through tools and add them to the toolbox
    for (let k = 0; k < tools.length; k++) {
      toolbox.addTool(tools[k]);
    }

    // add title attributes to tool buttons
    toolbox.addTitle(tools);

    // 🎯 Make stamp images clickable to change the current stamp
    document.querySelectorAll(".stamp").forEach((stampImg) => {
      stampImg.addEventListener("click", function () {
        let toolbox = drawingProperties.startHelper.getToolBox();
        let stampTool = toolbox.tools.find(tool => tool.name === "stampTool");
        if (stampTool && stampTool.setStamp) {
          stampTool.setStamp(this.src);
          toolbox.selectTool(stampTool); // optional: auto-select
        }
      });
    });

    // set the background colour
    background(drawingProperties.backgroundColour);
  };

  // getter
  this.getToolBox = function () {
    return toolbox;
  };
}
