const physic= (Matter.Engine);
const physic2= Matter.World;
const physic3= Matter.Bodies;

var engine; 
var w;
var engine3;
var ground;

function setup() {
  createCanvas(800,400);
  engine =  physic.create();
  w = engine.world;

  var ballbounce= {
 restitution: 1,friction:0.2
  }
  engine3= physic3.circle(480,200,20,ballbounce);
 physic2.add(w,engine3);

 console.log(engine3.position.x);

 var groundop={
   isStatic: true
 }
 ground=physic3.rectangle(400,380,800,20,groundop);

 physic2.add(w,ground);

}

function draw() {
  background("red");  
 physic.update(engine);

 ellipseMode(RADIUS);

ellipse(engine3.position.x,engine3.position.y,20)

 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,800,20);


 
 




 //drawSprites();
}