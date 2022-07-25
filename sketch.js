var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var unicorn, unicornImg;
var invisibleclimb, invisiblegroup;
var gamestate = "play"
var donut, donutImg;
var score = 5;

function preload(){
  towerImg = loadImage("glitter.webp");
  climberImg = loadImage("mouse.png");
  unicornImg = loadImage ("unicooorn.png");
  donutImg = loadImage ('rat.png')
  //spookySound = loadSound("spooky.wav");
}

function setup() {


  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;


  unicorn = createSprite(300, 300);
  unicorn.addAnimation('standjump', unicornImg);
  unicorn.scale = 0.3;

  donuts = createGroup();

  climbersGroup = createGroup();

  

  //spookySound.loop();











  
}

function draw() {
  background(0);
  textSize(20)
  fill('purple')
  text('score:'+score, 450, 50)
  
  

  if (gamestate === 'play'){

    if(tower.y > 600){
      tower.y = 300
  }

  if (keyDown('left')){
    unicorn.x -= 3;
  }

  if (keyDown('right')){
    unicorn.x += 3;
  }

  if (keyDown('space')){
    unicorn.velocityY = -3;
  }

  unicorn.velocityY += 0.5;
  for (var i = 0; i<climbersGroup.length; i++){
     var rainbow = climbersGroup.get(i);
     if (rainbow.isTouching(unicorn)){
      rainbow.remove()
      score = score-1
     }
  }
  for (var i = 0; i<donuts.length; i++){
    var rainbow = donuts.get(i);
    if (rainbow.isTouching(unicorn)){
     rainbow.remove()
     score = score+1
    }
 }
  

  spawndoor()
  spawndonut()
  drawSprites()

  textSize(20)
  fill('purple')
  text('score:'+score, 450, 50)
  
  if (score == 0){
    gamestate = 'end';
  }
  
     
  
  

  }

if (gamestate === 'end'){
  textSize(70)
  text('GaMe OvEr', 100, 300);
  
}


  










   
}

function spawndoor(){
  if (frameCount % 200 === 0){

  
  /*door = createSprite(random(120,480), -50);
  door.addImage('door', doorImg);
  door.velocityY = 1;
  doorsGroup.add(door);

  door.lifetime = 600;*/

  climber = createSprite(random(120,480), 15);
  climber.scale = 0.5
  climber.addImage('climber', climberImg);
  climber.velocityY = 1;
  climbersGroup.add(climber);

  climber.lifetime = 600;

  unicorn.depth = climber.depth+1

  //invisibleclimb = createSprite(door.x, 30, climber.width, 1);

  /*invisibleclimb.velocityY = 1;
  invisiblegroup.add(invisibleclimb);
  invisibleclimb.lifetime = 600;

  invisibleclimb.visible = false;*/



}
}

function spawndonut(){
  if (frameCount % 150 === 0){
    donut = createSprite(random(120,480), 15);
    donut.scale = 0.5
    donut.addImage('donut ', donutImg);
    donut.velocityY = 1;
    donuts.add(donut);
    donut.lifetime = 600;
    unicorn.depth = donut.depth+1
  }

}









