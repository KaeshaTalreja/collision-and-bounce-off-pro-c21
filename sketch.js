var fixedRect, movingRect;

var rect1,rect2;

var rect3,rect4;

var rect5,rect6;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(100,100,300,40);
  rect2=createSprite(100,300,10,30);

  rect3=createSprite(200,200,10,10);
  rect4=createSprite(900,200,20,20);

  rect3.velocityX=+4;
  rect4.velocityX=-3;

  rect5=createSprite(300,100,10,10);
  rect6=createSprite(300,600,20,20);

  rect5.velocityY=+3.2;
  rect6.velocityY=-2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,rect1)){
    movingRect.shapeColor="red";
    rect1.shapeColor="red";
  }
  else if(isTouching(movingRect,rect2)){
    movingRect.shapeColor="red";
    rect2.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    rect1.shapeColor="green";
    rect2.shapeColor="green"
  }
  
  bounceOff(rect3,rect4);
  bounceOff(rect5,rect6);

  drawSprites();
}
