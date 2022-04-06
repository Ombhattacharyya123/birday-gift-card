var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var block_image_object= ""


function new_image()
{
   
    fabric.Image.fromUrl("cake yummy!.jpg", function(Img){
        block_image_object = Img;

        block_image_object.scaleTowidth(700);
        block_image_object.scaleToheight(510);
        block_image_object.set({
            top:0,
            left:0,
        });
        canvas.add(block_image_object);
    });
	
}


function playSound(){
   x.play()
   console.log("play")	
}
