
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,mground1,sling1,sling2,sling3,sling4,sling5;
var body

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 =new Bob (300,350,50)
	bobObject2 =new Bob (350,350,50)
	bobObject3 =new Bob (400,350,50)
	bobObject4 =new Bob (350,350,50)
	bobObject5 =new Bob (500,350,50)

	ground1 = new Ground (400,100,300,10)
	sling1 = new Suspender (bobObject1,body,ground1.body,50*2,0)
	sling2 = new Suspender (bobObject2,body,ground1.body,-25*2,0)
	sling3 = new Suspender (bobObject3,body,ground1.body,-0*2,0)
	sling4 = new Suspender (bobObject4,body,ground1.body,25*2,0)
	sling5 = new Suspender (bobObject5,body,ground1.body,50*2,0)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY})
}



