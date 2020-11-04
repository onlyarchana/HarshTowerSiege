const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2, ground3, ground4, ground5
var blue1, blue2, blue3, blue4, blue5, blue6, blue7, blue8, blue9, blue10, blue11, blue12
var pink1, pink2, pink3, pink4, pink5, pink6
var green1, green2, green3, green4, green5, green6
var grey;
var player;
var slingShot;
var backgroundImg;

var score = 0;

gameState = 1;
var bg = "Day1.jpg";
var hour = 0;

function preload(){
  polygon_img=loadImage("polygon.png");
  getBackgroundImg();
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(650,1700,1400,1000)
  ground2 = new Ground(-498,300,1000,7000)
  ground3 = new Ground(1797,300,1000,7000)

  ground4 = new Ground(1100,260,240,8)
  ground5 = new Ground(820,450,360,8)

  blue1 = new Blue(700,400)
  blue2 = new Blue(740,400)
  blue3 = new Blue(780,400)
  blue4 = new Blue(820,400)
  blue5 = new Blue(860,400)
  blue6 = new Blue(900,400)
  blue7 = new Blue(940,400)

  blue8 = new Blue(1020,195)
  blue9 = new Blue(1060,195)
  blue10 = new Blue(1100,195)
  blue11 = new Blue(1140,195)
  blue12 = new Blue(1180,195)

  pink1 = new Pink(740,330)
  pink2 = new Pink(780,330)
  pink3 = new Pink(820,330)
  pink4 = new Pink(860,330)
  pink5 = new Pink(900,330)

  pink6 = new Pink(1100,65)

  green1 = new Green(780,260)
  green2 = new Green(820,260)
  green3 = new Green(860,260)

  green4 = new Green(1060,125)
  green5 = new Green(1100,125)
  green6 = new Green(1140,125)

  grey = new Grey(820,190)

  //player = new Player(100,260,40,40)
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:300});
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }
  else{
    background(bg);
  }
  fill(255,255,255)
  textSize(30)
  text("Score:"+score,1050,30)
  Engine.update(engine)

  
if(gameState == 1){
  if(hour>=7 && hour<=17){
      fill(0,0,0)
      textSize(30)
      text("Drag the hexagonal stone and release it, to\nlaunch it towards the blocks and hit\n the block and bring it down",20,30)
    }else {
        fill(255,255,255)
        textSize(30)
        text("Drag the hexagonal stone and release it, to\nlaunch it towards the blocks and hit\nthe block and bring it down",20,30)
  }
}
else{
  if(hour>=17 && hour<7){
      fill(255,255,255)
      textSize(35)
      text("Wow!!! what a shot now press space\nto getthe next chance",20,30)
    }
  else{
        fill(0,0,0)
        textSize(35)
        text("Wow!!! what a shot now press space\nto getthe next chance",20,30)
    }
}

  ground1.display();
  ground2.display();
  ground3.display();

  ground4.display();
  ground5.display();

  blue1.display();
  blue2.display();
  blue3.display()
  blue4.display();
  blue5.display();
  blue6.display();
  blue7.display();

  blue8.display();
  blue9.display();
  blue10.display();
  blue11.display();
  blue12.display();
  
  blue1.score();
  blue2.score();
  blue3.score();
  blue4.score();
  blue5.score();
  blue6.score();
  blue7.score();

  blue8.score();
  blue9.score();
  blue10.score();
  blue11.score();
  blue12.score();

  pink1.display(); 
  pink2.display(); 
  pink3.display(); 
  pink4.display(); 
  pink5.display(); 
  pink6.display();

  pink1.score();
  pink2.score();
  pink3.score();
  pink4.score();
  pink5.score();
  pink6.score();
  
  green1.display();
  green2.display();
  green3.display();

  green6.display();
  green5.display();
  green4.display();

  green1.score();
  green2.score();
  green3.score();

  green6.score();
  green5.score();
  green4.score();

  grey.display();  
  grey.score();
  
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
 // player.display();
 slingShot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
  gameState = 0

}
function keyPressed(){
  if(keyCode === 32){
    
    Matter.Body.setPosition(this.ball, {x: 200 , y: 300});
    slingShot.attach(this.ball);
    gameState =1
  }
}
async function getBackgroundImg(){

  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  hour = datetime.slice(11,13);
  console.log("hour" + hour);
  //day
  if(hour>=7 && hour<=8){
    bg = "Day1.jpg";
  }
  else if(hour>=8 && hour<=9){
    bg = "Day2.jpg";
  }
  else if(hour>=9 && hour<=10){
    bg = "Day3.jpg";
  }
  else if(hour>=10 && hour<=11){
    bg = "Day4.jpg";
  }
  else if(hour>=11 && hour<=12){
    bg = "Day5.jpg";
  }
  else if(hour>=12 && hour<=13){
    bg = "Day6.jpg";
  }
  else if(hour>=13 && hour<=14){
    bg = "Day7.JPG";
  }
  else if(hour>=14 && hour<=15){
    bg = "Day8.JPG";
  }
  else if(hour>=15 && hour<=16){
    bg = "Day9.JPG";
  }
  else if(hour>=16 && hour<=17){
    bg = "Day10.JPG";
  }
  //day

  //night
  else if(hour>=17 && hour<=18){
    bg = "Night1.jpg";
  }
  else if(hour>=18 && hour<=19){
    bg = "Night2.jpg";
  }
  else if(hour>=19 && hour<=20){
    bg = "Night3.jpg";
  }
  else if(hour>=20 && hour<=21){
    bg = "Night4.jpg";
  }
  else if(hour>=21 && hour<=22){
    bg = "Night5.jpg";
  }
  else if(hour>=22 && hour<=23){
    bg = "Night6.jpg";
  }
  else if(hour>=23 && hour<=24){
    bg = "Night7.jpg";
  }
  else if(hour>=24 && hour<=1){
    bg = "Night8.jpg";
  }
  else if(hour>=1 && hour<=2){
    bg = "Night9.JPG";
  }
  else if(hour>=2 && hour<=3){
    bg = "Night10.JPG";
  }
  else if(hour>=3 && hour<=4){
    bg = "Night11.jpg";
  }
  else if(hour>=4 && hour<=5){
    bg = "Night12.JPG";
  }
  else if(hour>=5 && hour<=6){
    bg = "Night13.JPG";
  }
  else if(hour>=6 && hour<=7){
    bg = "Night14.JPG";
  } else{
    bg = "Day1.jpg"
  }
  //night

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);

  

}

 