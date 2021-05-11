var p1;
var p2;
var ball;
var speed = 10;
var enter = true;

function setup(){
	createCanvas(windowWidth, windowHeight);
	p1 = new Racket(0, height/2-50);
	p2 = new Racket(width-20, height/2-50);
	ball = new Ball(width/2, height/2, 20, speed, p1, p2);
}

function draw(){
	background("black");
	if(enter){
		push();
			fill("black");
			stroke("white");
			rectMode(CENTER);
			rect(width/2, height/2, 300, 90);
			textSize(50);
			textAlign(CENTER, CENTER);
			fill("white");
			text("Press intro", width/2, height/2);
		pop();
	}
	else{
		push();
			textSize(40);
			textAlign(CENTER, TOP);
			fill("white");
			stroke("white");
			text(`${p1.score}  ${p2.score}`, width/2, 0);
			line(width/2, 0, width/2, height);
		pop();
		p1.display();
		p2.display();
		ball.display();
		ball.hasCollision(p1.x, p1.y, p1.w, p1.h, p1.direction);
		ball.hasCollision(p2.x, p2.y, p2.w, p2.h, p2.direction);
		move();
	}
}

function keyPressed(){
	if(keyCode == ENTER){
		enter = false;
	}
}

function move(){
	if(keyIsDown(87))
		p1.move(-speed);
	else if(keyIsDown(83))
		p1.move(speed);

	if(keyIsDown(UP_ARROW))
		p2.move(-speed);
	else if(keyIsDown(DOWN_ARROW))
		p2.move(speed);
}