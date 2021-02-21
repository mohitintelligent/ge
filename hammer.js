class hammer {
    constructor(x,y,width,hight){
        var option={
        'density':2,
        'friction': 1.0,
        'restitution':0.5
        }
        this.body=Bodies.rectangle(x,y,width,hight,option);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=hight;

    }
    display(){
        var pose=this.body.position;
        pose.x = mouseX;
        pose.y = mouseY;
        var angle=this.body.angle;
        push();
        translate(pose.x,pose.y);
        rotate(angle);
        fill("black");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}