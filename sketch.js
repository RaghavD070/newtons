const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
var bobObject1,bobObject2,bobObject3 ,bobObject4,bobObject5;
var ground;
var roofObject ; 

function preload()
{

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1300, 700);




bobObject1=new Bob(canvas.width/2-100,canvas.height/2,"white");
bobObject2=new Bob(bobObject1.x+60,canvas.height/2,"white");
bobObject3=new Bob(bobObject2.x+60,canvas.height/2,"white");
bobObject4=new Bob(bobObject3.x+60,canvas.height/2,"white");
bobObject5=new Bob(bobObject4.x+60,canvas.height/2,"white");

//ground = new Roof(400,200,300,20);
sling1= new Rope(bobObject1.body,{x:bobObject1.x,y:bobObject1.y-150});
  sling2= new Rope(bobObject2.body,{x:bobObject2.x,y:bobObject2.y-150});
  sling3= new Rope(bobObject3.body,{x:bobObject3.x,y:bobObject3.y-150});
  sling4= new Rope(bobObject4.body,{x:bobObject4.x,y:bobObject4.y-150});
  sling5= new Rope(bobObject5.body,{x:bobObject5.x,y:bobObject5.y-150});







	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("blue");

  drawSprites();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
//	ground.display();
	sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();


}

function mouseDragged(){
    Matter.Body.setPosition(bobObject1.body, {x: mouseX, y:mouseY});
}