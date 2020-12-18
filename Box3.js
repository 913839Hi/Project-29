class Box3 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(31,224,183);
        rect(pos.x, pos.y, this.width, this.height);
      }
  };