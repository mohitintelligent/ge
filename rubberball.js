class rubberball {
    constructor(x,y,radius){
        var option={
        'density':1,
        'friction': 5.0,
        'restitution':1
        }
        this.body=Bodies.circle(x,y,radius,option);
        this.x=x;
        this.y=y;
        this.radius=radius;
        
        World.add(world,this.body);
        
    }
    display(){
        var pose=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pose.x,pose.y);
        rotate(angle); 
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius,this.radius);
        fill("black");
        pop();
    }
}