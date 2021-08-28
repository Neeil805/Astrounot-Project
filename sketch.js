var astrounot
var bath
var drink

function preload() {
bath = loadAnimation("bath1.png","bath2.png");
drink = loadAnimation("drink1.png","drink2.png")
}




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astrounot = createSprite (300,2);
}

function draw() {
  background(255,255,255);  
  if(keyDown("RIGHT_ARROW")){
astrounot.addAnimation("bathing","bath");
astrounot.x = 300
  }
  drawSprites();
}