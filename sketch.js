const Engine = Matter.Engine ;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body ;

var engine,world ;
var polygon, sling;
var ground1,ground2 ;
var score=0 ;
var bg = "white";

function preload(){
    getBackgroundImg();
}
function setup(){

    engine = Engine.create();
    world = engine.world;

    createCanvas(850,380) ;

    polygon = new Polygon(150,250);

    block1 = new Block(200+200,50+81,20,20);
    block2 = new Block(180+200,70+81,20,20);
    block3 = new Block(200+200,70+81,20,20);
    block4 = new Block(220+200,70+81,20,20);
    block5 = new Block(160+200,90+81,20,20);
    block6 = new Block(180+200,90+81,20,20);
    block7 = new Block(200+200,90+81,20,20);
    block8 = new Block(220+200,90+81,20,20);
    block9 = new Block(240+200,90+81,20,20);
    block10 = new Block(260+200,110+81,20,20);
    block11 = new Block(140+200,110+81,20,20);
    block12 = new Block(160+200,110+81,20,20);
    block13 = new Block(180+200,110+81,20,20);
    block14 = new Block(200+200,110+81,20,20);
    block15 = new Block(220+200,110+81,20,20);
    block16 = new Block(240+200,110+81,20,20);

    block17 = new Block(200+500,50+100+81,20,20);
    block18 = new Block(180+500,70+100+81,20,20);
    block19 = new Block(200+500,70+100+81,20,20);
    block20 = new Block(220+500,70+100+81,20,20);
    block21 = new Block(160+500,90+100+81,20,20);
    block22 = new Block(180+500,90+100+81,20,20);
    block23 = new Block(200+500,90+100+81,20,20);
    block24 = new Block(220+500,90+100+81,20,20);
    block25 = new Block(240+500,90+100+81,20,20);
    block26 = new Block(260+500,110+100+81,20,20);
    block27 = new Block(140+500,110+100+81,20,20);
    block28 = new Block(160+500,110+100+81,20,20);
    block29 = new Block(180+500,110+100+81,20,20);
    block30 = new Block(200+500,110+100+81,20,20);
    block31 = new Block(220+500,110+100+81,20,20);
    block32 = new Block(240+500,110+100+81,20,20) ;

    ground1 = new Ground(200+200,200,300,10);
    ground2 = new Ground(200+500,200+100,300,10);

    sling = new SlingShot(polygon.body,{x:100, y:200});

}

function draw(){
    background(bg);
    Engine.update(engine);

    polygon.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();

    ground1.display();
    ground2.display();

    sling.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();
    block31.score();
    block32.score();


    textSize(25);
    text("score: "+score,700,40) ;

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode == 32){

        sling.attach(polygon.body);
        Body.setPosition(polygon.body,{x:150 , y:250 });
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(12,13);
    
    if(hour>=06 && hour<=19){
        bg = "lightblue";
    }
    else{
        bg = "black";
    }
}
