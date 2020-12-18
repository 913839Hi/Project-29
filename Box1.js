class Box1 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(66,212,245);
        rect(pos.x, pos.y, this.width, this.height);
      }
  };