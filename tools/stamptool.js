var stamp;
//var stampSizeSlider;
function StampTool()

{
	
	this.name = "stampTool";
    this.icon = "assets/stamp.jpg";
    this.size = 50;
    let thisStamp = loadImage ('./assets/smileyface.jpg');
//    let stampSlider = null ;
    let self = this;
//      
//stampSizeSlider = createSlider (5, 50,20); 
// stampSizeSlider.parent("#sizeofStampControl");


this.draw = function()
{
    
    if(mouseIsPressed)
    { 
        
        var stampToolX= mouseX - this.size/2;
        var stampToolY= mouseY - this.size/2;
        image(thisStamp, stampToolX, stampToolY, 
             this.size,this.size);
    }
        
    };
}
