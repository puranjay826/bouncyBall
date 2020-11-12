const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var myengine, myworld,ball,ground;


function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;
  var options={
    isStatic:true
  }

   ground= Bodies.rectangle(200,390,400,50,options);
   World.add(myworld,ground);
   
   var boptions={
    restitution: 10
   }
  ball= Bodies.circle(100,100,25,boptions)
   World.add(myworld,ball)
   //console.log(box);
  // console.log(box.position.x);
   //console.log(box.position.y);
     
 
}

function draw() {
  background(0); 
  Engine.update(myengine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25)

}