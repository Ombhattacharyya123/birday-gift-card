var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{

    fabric.Image.fromUrl('', function(Img){
        block_image_object = Img;

        block_image_object.scaleTowidth(700);
        block_image_object.scaleToheight(510);
        block_image_object.set({
            top:0,
            left:0,
        });
    }
	
}

function playSound(){
	
}
