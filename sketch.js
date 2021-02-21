
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    gorund1=new Ground(400,700,20,700);
    sand1=new sand(120,300,2);
    sand2=new sand(140,300,2);
    sand3=new sand(160,300,2);
    sand4=new sand(180,300,2);
    sand5=new sand(200,300,2);
    hammer1=new hammer(80,80,30,60);
    iron1=new iron(500,500,60,60);
    rubberball1=new rubberball(200,200,10);
    stone1=new stone(100,100,50,50);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  gorund1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  hammer1.display();
  iron1.display();
  rubberball1.display();
  stone1.display();
  drawSprites();
 
}



