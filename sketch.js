
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var bin1,bin2,bin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground = createSprite(width/2,680,800,10)
	World.add(world,ground)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,200)
	bin1 = new Dustbin(width/2,670,200,20)
	bin2 = new Dustbin(320,350,20,100)
	bin3 = new Dustbin(480,350,20,100)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	paper.display();
	bin1.display()
	bin2.display()
	bin3.display()
  drawSprites();
 
}



