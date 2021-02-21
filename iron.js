class iron {
    constructor(x,y,width,hight){
        var option={
        'density':5,
        'friction': 0.5,
        'restitution':0.25
        }
        this.body=Bodies.rectangle(x,y,width,hight,option);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=hight;

    }
    display(){
        var pose=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pose.x,pose.y);
        rotate(angle);
        fill("orange");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}