var sea,seaImage;
var ship,shipImage;

function preload(){
  shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImage=loadImage("sea.png")
}
function setup(){
  createCanvas(400,400);

 sea=createSprite(400,200);
  sea.addImage(seaImage)
  sea.velocityX=-5
 sea.scale=0.3
  
  ship=createSprite(200,195,99,35,)
 ship.addAnimation("movingship",shipImage) 
 ship.scale=0.3
 
 
}

function draw() {
  background("blue");
  sea.velocityX=-3


if(sea.x<0){
  sea.x=sea.width/8
 }

drawSprites();

fill("blue");
textSize(30);
text("SHUBHAM SM",150,365);

}