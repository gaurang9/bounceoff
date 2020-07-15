var fixedRect, movingRect;
var o1,o2,o3,o4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(900, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,150,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1 = createSprite(400,100,50,50);
  o1.shapeColor = "green";
  o1.debug = true;

  o2=createSprite(500,100,50,50);
  o2.shapeColor = "green";
  o2.debug = true;

  o3=createSprite(1000,100,50,50);
  o3.shapeColor = "green";
  o3.debug = true;

  o4=createSprite(800,100,50,50);
  o4.shapeColor = "green";
  o4.debug = true;

o1.velocityY = +1;
  movingRect.velocityY = -1;
  //fixedRect.velocityY = +5;//
}

function draw() {
  background(0,0,0);  
if (bounceoff(movingRect,o1)){
  movingRect.velocityX = movingRect.velocityX * (-1);
  o1.velocityX = o1.velocityX * (-1);
  movingRect.velocityY = movingRect.velocityY * (-1);
  o1.velocityY = o1.velocityY * (-1);
}

  
  drawSprites();
}
function bounceoff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  return true;
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  return true;
}
}