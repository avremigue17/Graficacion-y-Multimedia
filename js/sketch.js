var player1;
var player2;
var ball;
var speed = 10;
var enter = true;

function setup(){
	createCanvas(windowWidth, windowHeight);
	player1 = new Racket(0, height/2-50);
	player2 = new Racket(width-20, height/2-50);
	ball = new Ball(width/2, height/2, 20, speed, player1, player2);
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
			text(`${player1.score}  ${player2.score}`, width/2, 0);
			line(width/2, 0, width/2, height);
		pop();
		player1.display();
		player2.display();
		ball.display();
		ball.hasCollision(player1.x, player1.y, player1.w, player1.h, player1.direction);
		ball.hasCollision(player2.x, player2.y, player2.w, player2.h, player2.direction);
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
		player1.move(-speed);
	else if(keyIsDown(83))
		player1.move(speed);

	if(keyIsDown(UP_ARROW))
		player2.move(-speed);
	else if(keyIsDown(DOWN_ARROW))
		player2.move(speed);
}