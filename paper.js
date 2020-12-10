class Paper{
    constructor(x,y){
        var opt = {
           isStatic : false,
            restitution : 0.8,
            friction : 0.5,
            density  : 1.2
        }
        this.body = Bodies.circle(x,y,10,opt)
        World.add(world,this.bodies)
    }
    display(){
        ellipseMode(CENTRE)
        fill("white")
        ellipse(this.body.position.x,this.body.position.y,10)
    }
}