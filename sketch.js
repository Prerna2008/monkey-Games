
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var score = 0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;

  console.log(ground.x);
  
  FoodGroup = new Group();
  ObstacleGroup= new Group();
}


function draw() {
 background("white");
  fill("black")
  textSize(20);
  text("score="+score,210,50)
  fill("black");
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime="+survivalTime,10,50);
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score=score+1;
  }
  if(keyDown("space")&&monkey.y>150){
    monkey.velocityY= -10
  }
  if(monkey.y<150){
  monkey.velocityY = monkey.velocityY+1.5;
  }
 if(ground.x<0){ 
  ground.x=ground.width/2;
 }
 
  banana();
  obstacles();
 monkey.collide(ground)
 drawSprites();
}

function banana(){
  if(frameCount%80==0){
    var fruit = createSprite(400,0,10,10)
    fruit.addImage(bananaImage);
    fruit.y = Math.round(random(120,250));
    fruit.scale=0.1
    fruit.velocityX=-4;
    FoodGroup.add(fruit);
  }
}
function obstacles(){
  if(frameCount%300==0){
    var obstacle = createSprite(400,330,10,10)
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-4;
    ObstacleGroup.add(obstacle);
  }
}

