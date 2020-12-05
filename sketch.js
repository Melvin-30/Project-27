
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new roof(275,200,300,20)
	bob1=new bob(175,500,25)
	bob2=new bob(225,500,25)
	bob3=new bob(275,500,25)
	bob4=new bob(325,500,25)
	bob5=new bob(375,500,25)
	rope1=new rope(bob1.body,{x:175, y:200});
	rope2=new rope(bob2.body,{x:225, y:200});
	rope3=new rope(bob3.body,{x:275, y:200});
	rope4=new rope(bob4.body,{x:325, y:200});
	rope5=new rope(bob5.body,{x:375, y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-160,y:0})
	}
}


