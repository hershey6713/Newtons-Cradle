
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200, 500, 50);
	bob2 = new Bob(300, 500, 50);
	bob3 = new Bob(400, 500, 50);
	bob4 = new Bob(500, 500, 50);
	bob5 = new Bob(600, 500, 50);

	roof = new Roof(400, 100, 700, 50);

	rope1 = new Rope(bob1.bob, roof.roof, -(bob1.radius*4), 0);
	rope2 = new Rope(bob2.bob, roof.roof, -(bob2.radius*2), 0);
	rope3 = new Rope(bob3.bob, roof.roof, 0, 0);
	rope4 = new Rope(bob4.bob, roof.roof, bob4.radius*2, 0);
	rope5 = new Rope(bob5.bob, roof.roof, bob5.radius*4, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(bob1.bob, bob1.bob.position, {x:-900,y:-900});
	}
}