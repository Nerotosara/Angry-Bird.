class band{
constructor(bodyA,pointB){
    var bands={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
    }
this.pointB=pointB
    this.Band=Constraint.create(bands)
    World.add(world,this.Band);

}
fly(){
   this.Band.bodyA=null 
}
display(){
    if(this.Band.bodyA){

    
var pointA=this.Band.bodyA.position
var pointB=this.pointB
line(pointA.x,pointA.y,pointB.x,pointB.y)

}
}
}