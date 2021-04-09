const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var bird;

function setup(){
  canvas= createCanvas(1000,650);
  engine = Engine.create();
  world = engine.world;

  bird = new Bird(400,325,40,50); 

} 

function draw(){
  background("black");

  bird.display();

 // drawSprites();
}
if(keyIsDown(Space)){
  bird.x = bird.x;
  bird.y = bird.y + 1;
}