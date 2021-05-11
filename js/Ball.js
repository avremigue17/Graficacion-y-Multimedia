class Ball{

  constructor(x, y, d, stepX, p1, p2){
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = "white";
    this.stepX = stepX;
    this.stepY = 0;
    this.p1 = p1;
    this.p2 = p2;
  }

  display(){
    push();
    fill(this.c);
    ellipse(this.x, this.y, this.d);
    this.moveY();
    this.marginTop();
    this.reset();
    pop();
  }

  moveY(){
    this.x -= this.stepX;
    this.y += this.stepY;
  }

  hasCollision(x, y, w, h, direction){
    if(x < this.x+this.d/2 && x+w >= this.x-this.d/2 && y < this.y && y+h >= this.y)
    {
      this.stepX *= -1;
      this.stepY = (direction?Math.abs(this.stepX):Math.abs(this.stepX)*-1);
    }
  }

  marginTop(){
    if(this.y - this.d/2 <= 0)
      this.stepY = Math.abs(this.stepX);
    else if(this.y + this.d/2 >= height)
      this.stepY = Math.abs(this.stepX)*-1;
  }

  reset(){
    if(this.x - this.d/2 <= 0 || this.x + this.d/2 >= width)
    {	
    	if(this.x - this.d/2 <= 0)
    		this.p2.score+=1;
    	else
    		this.p1.score+=1;
    	this.x = width/2;
    	this.y = height/2;
    	this.stepY = 0;
    	this.p1.x = 0;
    	this.p1.y = height/2-50;
    	this.p2.x = width-20;
    	this.p2.y = height/2-50;
    }
  }
}