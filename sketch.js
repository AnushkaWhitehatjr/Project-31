const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var groundObj;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

var world, engine;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;

  groundObj = new Ground(width/2,height,width,50);

  for (var k = 0; k<=width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for(var j = 40; j <= width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,75, 10));
  }

  for(var j = 15; j <= width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175, 10));
  }

  for(var j = 40; j <= width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,275, 10));
  }

  for(var j = 15; j <= width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,375, 10));
  }


  //Engine.run(engine);

}

function draw() {
  background(0);  

  Engine.update(engine);

  groundObj.display();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }

  drawSprites();
}