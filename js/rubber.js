class Chain{
    constructor(body1,point2){
    var options={
    bodyA:body1,
    pointB:point2,
    stiffness:0.04,
    length:20
    }
    this.chain=Constraint.create(options)
    World.add (world,this.chain);
    this.pointB=point2
    }
    attach(){
		this.chain.bodyA = bodyA;
	}
    display(){
    if(this.chain.bodyA){
    strokeWeight(4)
    var pointA = this.chain.bodyA.position
    var pointB = this.pointB
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
fly(){
    this.chain.bodyA = null;
   } 
}
