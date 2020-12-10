class Bin{
    constructor(x,y,w,h){
        this.height = h
        this.width = w
        var opt = {
            restitution:0,
            isStatic:false
        }
        this.Body = bodies.rectangle(x,y,w,h,opt)
        World.add(world,this.Body)
    }
    show(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}