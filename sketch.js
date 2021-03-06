const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,mouse1,mouse3;
var backgroundImg,platform;
var cat;

var score = 0;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    mouse1 = new Mouse(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    mouse3 = new Mouse(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    cat = new Cat(75,300);

    
}

function draw(){
        background("blue");
        
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    
    cat.scale = 100
    box1.display();
    box2.display();
    ground.display();
    mouse1.display();
    mouse1.score();
    log1.display();

    box3.display();
    box4.display();
    mouse3.display();
    mouse3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    cat.display();
    platform.display();
   
   //console.log(bird.body.speed); 
    
}

