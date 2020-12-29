
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;
function preload()
{
	
}

function setup() {
createCanvas(800, 700);


engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
bobObject = new bob(300,300);
bobObject2 = new bob(350,300);
bobObject3 = new bob(400,300);
bobObject4 = new bob(450,300);
bobObject5 = new bob(500,300);
roofObject = new roof();
rope1 = new Rope(bobObject.body,roofObject.body,-100);
rope2 = new Rope(bobObject2.body,roofObject.body,-50);
rope3 = new Rope(bobObject3.body,roofObject.body,0);
rope4 = new Rope(bobObject4.body,roofObject.body,50);
rope5 = new Rope(bobObject5.body,roofObject.body,100);

Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background("black");
  


bobObject.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
roofObject.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

}

function keyPressed(){
    if(keyCode == UP_ARROW){
        Matter.Body.applyForce(bobObject.body,bobObject.body.position,{x:50,y:50});
        
        
    }
}

