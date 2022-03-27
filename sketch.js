const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
   background1 = loadImage("Images/background_1.jpg");
  background2 = loadImage("Images/background_2.jpg");
   boyAnimation = loadAnimation("Images/boy_running1.png","Images/boy_running2.png","Images/boy_running3.png","Images/boy_running4.png");
   building1 = loadImage("Images/Building1.png");
   building2 = loadImage("Images/building2.png");
   building3 = loadImage("Images/building3.png");
   boy_jumping = loadAnimation("Images/jump1.PNG","Images/jump2.PNG","Images/jump3.PNG","Images/jump4.PNG")
}
    
function setup(){

createCanvas(1200,650);
    
bg1 = createSprite(540,370);
bg1.addImage(background1);
bg1.scale= 1.1
//bg1.velocityX=-5;  

Building1 = createSprite(200,380);
Building1.addImage(building1);
//Building1.velocityX = 3;

//Building2 = createSprite(400,340);
//Building2.addImage(building2);
boy = createSprite(200,200);
boy.addAnimation("running",boyAnimation);


}

function draw(){
    
background("white");


if(keyIsDown("space")){

   boy.addAnimation("jumping",boy_jumping);
   
   }


drawSprites();

}



