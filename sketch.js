var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage(groundImage)
  ground.velocityX=-2

  invisibleGround = createSprite(200,190,400,20);
  invisibleGround.visible=false
}

function draw() {
  background("black");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  //jumping the trex on space key press
  if(keyDown("space")&& trex.y>=100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 
 //stop trex from falling down 
  trex.collide(invisibleGround);
  spawnclouds();
  spawnobstacles();
  drawSprites();
}
function spawnclouds(){
  if(frameCount%60==0){
      cloud = createSprite(600,100,40,10);
      cloud.addImage(cloudImage)
      cloud.velocityX = -3
      cloud.y = Math.round(random(10,60))
      cloud.lifetime=200;
    }
  
}
function spawnobstacles(){
  if (frameCount%60==0){
    obstacle=createSprite(600,160,40,10);
    obstacle.velocityX=-3;
    var rand=Math.round(random(1,6))
    switch(rand){
      case 1: obstacle.addImage(obstacle1)
              break;
      case 2: obstacle.addImage(obstacle2)
              break;
      case 3: obstacle.addImage(obstacle3)
              break;
      case 4: obstacle.addImage(obstacle4)
              break;
      case 5: obstacle.addImage(obstacle5)
              break;
      case 6: obstacle.addImage(obstacle6)
              break;
      default : break
    }
    obstacle.scale=0.5;
  }

}