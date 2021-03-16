
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var roof1;
var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1= new roof(width/2,150,width,20);
	
	b1= new bob(300,250,50);
	b2= new bob(500,250,50);
	b3= new bob(700,250,50);
	b4= new bob(900,250,50);
	b5= new bob(1100,250,50);

	r1= new rope(b1.body,roof1.body);
	r2= new rope(b2.body,roof1.body);
	r3= new rope(b3.body,roof1.body);
	r4= new rope(b4.body,roof1.body);
	r5= new rope(b5.body,roof1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  roof1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
}

function keyPressed()
{

if (keyCode === UP_ARROW)
{
	Matter.body.applyForce(b1.body,b1.body.position,{x:-50,y:-45});
}

}

function drawLine(constraint)

{

	bobBodyPosition=constraint.bodyA.position;
	roof1BodyPosition=constraint.bodyB.position;

	roof1BodyOffset=constraint.pointB;
	
	roof1BodyX=roofBodyPosition.x+roofBodyOffset.x;
	roof1BodyY=roofBodyPosition.y+roofBodyOffset.y;
	line(bobBodyPosition.x, bobBodyPosition.y, roof1BodyX,roof1BodyY);
}



