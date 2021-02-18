
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy,stone;

function preload(){
	boy=loadImage("images/boy.png");
	bg=loadImage("images/background.jpg")
}

function setup() {
	createCanvas(1250, 570);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,60,30);
	mango3=new mango(900,200,30);
	mango4=new mango(950,100,30);
	mango5=new mango(1030,200,30);
	mango6=new mango(1200,200,30);
	mango7=new mango(1150,200,30);
	mango8=new mango(1020,100,30);
	mango9=new mango(1000,150,30);
	mango10=new mango(1100,180,30);
	treeObj=new tree(1030,570);
	stone=new Stone(240,400,50,50);
	groundObject=new ground(400,560,2000,20);
	chain1= new Chain(stone.body,{x:250,y:400})
	  }  
	



function draw() {

  background(bg);
  //Add code for displaying text here!
  image(boy ,200,330,200,300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  groundObject.display();
chain1.display();

detectCollision(stone, mango1);
detectCollision(stone, mango2);
detectCollision(stone, mango3);
detectCollision(stone, mango4);
detectCollision(stone, mango5);
detectCollision(stone, mango6);
detectCollision(stone, mango7);
detectCollision(stone, mango8);
detectCollision(stone, mango9);
detectCollision(stone, mango10);

drawSprites();
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
 chain1.fly()
}
function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:240, y:400});
	  chain.attach(stone.body);
	}
  }
function detectCollision(lstone,lmango){
stoneBodyPosition = lstone.body.position;
mangoBodyPosition = lmango.body.position;
  
var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if(distance <= lmango.r + lstone.r){
Matter.Body.setStatic(lmango.body, false);
}
  }