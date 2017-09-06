var pad_1;
var pad_2;
var pad_1_y;
var PAD_1_X = 20;
var pad_2_y;
var PAD_2_X = 780;
var ball;
var ball_x;
var ball_y;
var bounces;
var direction;
var angle;
var ballColor;
function setup() {
  createCanvas(800,500);
  background(100);
  for (var i = 0; i < 50; i+=2) {
    fill(150);
    noStroke();
    rect(390,(i+1)*10,10,15);
  
  }
  pad_1_y = 230;
  pad_2_y = 230;
  fill(255,0,0);
  pad_1 = rect(PAD_1_X,pad_1_y,10,40);
  fill(0,255,0);
  pad_2 = rect(PAD_2_X,pad_2_y,10,40);
  ball_x = 400;
  ball_y = 250;
  ballColor = color(random(256), random(256), random(256));
  //fill(255);
  fill(ballColor);
  ball = ellipse(ball_x,ball_y,30);
  bounces = 0;
  direction = -1;
  angle = 1;
}

function draw() {
  background(100);
  for (var i = 0; i < 50; i+=2) {
    fill(150);
    noStroke();
    rect(390,(i+1)*10,10,15);
  
  }
  movePaddles();
  fill(255,0,0);
  pad_1 = rect(PAD_1_X,pad_1_y,10,40);
  fill(0,255,0);
  pad_2 = rect(PAD_2_X,pad_2_y,10,40);
  //ball_y = 250; //angle*2;
 // fill(255);
  fill(ballColor);
  ball = ellipse(ball_x,ball_y,30);
  moveBall();
  checkForHit();
  displayBounces();
}

function movePaddles() {
  if (keyIsDown(UP_ARROW) && pad_1_y > 0 && pad_2_y > 0) {
    pad_1_y -= 2;
    pad_2_y -= 2;
  }
  if (keyIsDown(DOWN_ARROW) && pad_1_y < 460 && pad_2_y < 460) {
    pad_1_y += 2;
    pad_2_y += 2;
  }
}

function moveBall() {
  if (ball_x > 0 && ball_x < 800) {
    ball_x += direction;
   // print(ball_x);
    ball_y += angle;
   // print(ball_y);
     if (ball_y <= 15 || ball_y >= 485) {
    angle = -angle;
    
  }
  }

  else {
  ball_x = 400;
  ball_y = 250;
  }
}

function checkForHit() {
  if (ball_x <= PAD_1_X +25
      && ball_y >= pad_1_y
      && ball_y <= pad_1_y+40) {
        bounces += 1;
        direction = 5;
        angle = 5;
        ballColor = color(random(256), random(256), random(256));
        //ball_y *= -4;
        //ball_x = - ball_x;
  }
  if (ball_x+15 >= PAD_2_X 
      && ball_y >= pad_2_y
      && ball_y <= pad_2_y+40) {
        bounces += 1;
        direction = -5;
        angle = -5;
        ballColor = color(random(256), random(256), random(256));
        //ball_y = 40;
        //ball_x = -ball_x;
      }
}

function displayBounces() {
  fill(175);
  textSize(20);
  text("Bounces: " + bounces,20,480);
}
