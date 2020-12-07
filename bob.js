class bob{
    constructor(x,y,r){
        var options={
            restitution:1,
            friction:0.5,
            density:1.2,
            //isStatic:true
        }
        this.body=Bodies.circle(x,y,r,options)
        this.radius=r;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body;
        push()
        rotate(angle)
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        fill("Red");
        ellipse(0,0,this.radius)
        pop()
    }
}