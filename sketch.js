var background_img

var table
var chair1
var chair2
var chair3
var chair4
var bed
var wood1
var wood2
var wood3
var wood4
var bench1
var bench2
var bench3
var bench4
var bench5
var bench6

var player
var zombie

var playerimage
var zombieimage


function preload(){
  background_img=loadImage("images/background.png");
  playerimage=loadImage("images/player.png")
  zombieimage=loadImage("images/zombie.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  player=createSprite(width/2,height/2+130,70,70);
  player.addImage(playerimage);
  player.scale=0.15

  zombie=createSprite(80,height/2,70,70);
  zombie.addImage(zombieimage);
  zombie.scale=0.15

  table= createSprite(width/2-35,height/2-15,485,55);
  table.visible=false;

  bench3=createSprite(width/2-440,height/2+340,150,55);
  bench3.rotation=35
  bench3.visible=false;

  bench1=createSprite(width/2-550,height/2-115,65,150);
  bench1.rotation=10
  bench1.visible=false;

  bench2=createSprite(width/2-570,height/2+125,65,150);
  bench2.rotation=10
  bench2.visible=false;

  bench4=createSprite(width/2-120,height/2+370,200,55);
  bench4.rotation=-8
  bench4.visible=false;

  bench5=createSprite(width/2+230,height/2+350,190,45);
  bench5.rotation=-6
  bench5.visible=false;

  bench6=createSprite(width/2+545,height/2+173,50,155)
  bench6.rotation=42
  bench6.visible=false;
}

function draw(){
  background(background_img);
  
  drawSprites();
}
