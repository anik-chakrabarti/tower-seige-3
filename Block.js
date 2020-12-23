class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.2,
            'friction':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility= 10 ;
        World.add(world, this.body);

      }

      display(){

        var angle = this.body.angle;
        if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(200,250,50);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        
      }

      else{
        World.remove(world,this.body);
        this.visibility-=2;
      
      }
      }

      score(){

        if(this.visibility<10 && this.visibility>-1000){
          score++ ;
        }
      }
}