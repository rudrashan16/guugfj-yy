class Rope{
    constructor(body1,body2,xOffset){
        var options ={
            bodyA:body1,
            bodyB:body2,                                                                                 
            pointB:{x:xOffset,y:0}
        }
        this.rope = Constraint.create(options)
        this.xOffset = xOffset;
        World.add(world,this.rope);
    }
    display(){
        stroke("white");
        strokeWeight(2.06);
         pointA = this.rope.pointA.position;
         pointB = this.rope.pointB.position;
        line(pointA.x,pointA.y,pointB.x,this.xOffset,pointB.y);
    }
}