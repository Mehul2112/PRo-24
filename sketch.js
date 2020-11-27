
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	ball = new paper(200,50,5)
	d1 = new Dust(1000,550,100,PI/0);
	d2 = new Dust(800,550,100,PI/0);
	d3 = new HoriDust(900,590,20,PI/0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  ball.display();

  keypressed();
  drawSprites();

}

function keypressed(){

	if(keyCode === UP_ARROW){



		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.05, y:-0.5});
	}
}



