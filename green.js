class Green{
    constructor(x,y){
    var options = {
      restitution :1,
      friction :0.1,
      }
       this.body= Bodies.rectangle(x,y,40,70);
       World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      strokeWeight(3);
      rectMode(CENTER);
      fill(63, 224, 208);
      rect(pos.x, pos.y,40,70);
    }
    
    score(){
      if(this.body.position.y > 600 && this.body.position.y < 605){
        score = score+40;
     }
    }

}