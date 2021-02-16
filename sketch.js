const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder, thunder1,thunder2,thunder3,thunder4;
var walking_1, walking_2, walking_3, walking_4, walking_5, walking_6, walking_7, walking_8,walking;
                           

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;
 
function preload(){
    thunder1 = loadImage("sprites/thunderbolt/1.png");
    thunder2 = loadImage("sprites/thunderbolt/2.png");
    thunder3 = loadImage("sprites/thunderbolt/3.png");
    thunder4 = loadImage("sprites/thunderbolt/4.png");

    walking_1=loadAnimation("sprites/WalkingFrame/walking_1.png",walking);
    walking_2=loadAnimation("sprites/WalkingFrame/walking_2.png",walking);
    walking_3=loadAnimation("sprites/WalkingFrame/walking_3.png",walking);
    walking_4=loadAnimation("sprites/WalkingFrame/walking_4.png",walking);
    walking_5=loadAnimation("sprites/WalkingFrame/walking_5.png",walking);
    walking_6=loadAnimation("sprites/WalkingFrame/walking_6.png",walking);
    walking_7=loadAnimation("sprites/WalkingFrame/walking_7.png",walking);
    walking_8=loadAnimation("sprites/WalkingFrame/walking_8.png",walking);
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,510);

    //creating drops
    if(frameCount % 125 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));

    if(frameCount % 60 === 0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
         thunder.scale = random(0.3,0.6)
        //thunder.scale = Math.round(random(0.5,0.8))
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   

