const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var object, plank;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    chain = new Chain(plank.body,object.body);
     
    plank= createsprite(600,210,100,20);
    object= createsprite(600,200,50,50);
    


}
 

function draw(){
    plank.display();
    object.display();
    chain.display();
}