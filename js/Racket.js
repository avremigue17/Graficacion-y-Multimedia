class Racket{

  constructor(x, y){
    this.w = 20;
    this.h = 150;
    this.x = x;
    this.y = y;
    this.score = 0;
    this.direction = true;
  }

  display(){
    push();
    fill("white");
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  move(y){
    if(y < 0 && this.y > 0)
    {
      this.y += y;
      this.changeDirection(y>0?true:false);
    }
    if(y > 0 && this.y+this.h < height)
    {
      this.y += y;
      this.changeDirection(y>0?true:false);
    }
    
  }

  changeDirection(direction){
    this.direction = direction;
  }
}