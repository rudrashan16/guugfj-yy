class roof{
    constructor(){
        var options={
            isStatic:true
      
        }
        
        
        this.body = Bodies.rectangle(400,100,300,30,options);
        
 World.add(world,this.body);
    }
    display(){
        fill("yellow")
        rect(this.body.position.x,this.body.position.y,300,30);
    }
}