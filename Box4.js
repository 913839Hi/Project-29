class Box4 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(118,133,129);
        rect(pos.x, pos.y, this.width, this.height);
      }
  };