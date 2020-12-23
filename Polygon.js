class Polygon{
    constructor(x,y){

        this.body = Bodies.circle(x,y,18,{isStatic:false});
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,40,40);
        pop();

    }
}