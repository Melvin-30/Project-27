class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 300
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
     }
     display(){
         //var pointa=this.chain.body1.position,pointb=this.chain.body2.position
         var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            stroke(255,255,255)
            strokeWeight(5);
            line(pointA.x, pointA.y-25, pointB.x, pointB.y);
     }
    }