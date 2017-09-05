var wingColor = 255;
var earColor = 255;
var eyelidColor = 255; //color(0,0,0,0); //255;//112,7,178; //dark purple
//var bgColor = 255;
var bgColor = 154;

function setup() {
  //background
  createCanvas(800,600);
  //background(15,178,88); //dark green
  //background(random(256), random(256), random(256));
}

function draw() {
  //background((bgColor));
  background(154,237,255);
  hill(-100,600,400,500);
  hill(0,600,500,600);
  hill(100,700,900,700);
  cloud(250,200,100,100);
  cloud(100,100,50,150);
  cloud(500,50,150,50);
  translate(mouseX - 400, mouseY - 300);
  arms();
  body();
  belly();
  ears();
  head();
  eyes();
  nose();
}

function arms() {
   //left arm
  //fill(38,204,183); //teal
  fill(wingColor);
  noStroke();
  rect(200,280,140,40);
  //right arm
  rect(460,280,140,40)
}

function body() {
  fill(112,7,178); //dark purple
  noStroke();
  triangle(260,420,540,420,400,140);
}

function belly() {
  fill(255,45,172); //pink
  ellipse(400,280,100,200);
}

function ears() {
   //left ear
  //fill(255,33,243); //magenta
  fill(earColor);
  //stroke(255,33,243);
  noStroke();
  triangle(330,140,400,140,360,80);
  //right ear
  triangle(400,140,470,140,430,80);
}

function head() {
  fill(169,35,255); //light purple
  noStroke();
  arc(400,180,200,140,-QUARTER_PI,PI+QUARTER_PI, CHORD);
}

function eyes() {
  //left eye
  fill(255,255,255);
  stroke(255,255,255);
  //for (var i = 0; i < 2; i++); {
  //  ellipse(360+(i*80),180,60);
  //}
  
  ellipse(360,180,60);
  //right eye
  ellipse(440,180,60);
  
  //left pupil
  fill(0,0,0);
  ellipse(370,180,40);
  //right pupil
  ellipse(450,180,40);
  
  //sleep
  if (mouseIsPressed) {
    eyelidsClose();
    //yawning
    fill(0);
    noStroke();
    ellipse(410,230,15,20);
  }
}

function nose() {
  fill(255,180,71); //orange
  noStroke();
  ellipse(400,200,20,40);
}

function eyelidsClose() {
  fill(112,7,178) //dark purple
  stroke(0); //black
  //left eye closed
  ellipse(360,180,60);
  //right eye closed
  ellipse(440,180,60);
}

function keyPressed() {
  if (keyCode == ENTER) {
  //bgColor = color(random(256), random(256), random(256));
  wingColor = color(random(256), random(256), random(256));
  earColor = color(random(256), random(256), random(256));
  }
  return false;
}

//function mousePressed() {
//  eyelids();
  //if (eyelidColor == color(0,0,0,0)) {
  //eyelidColor = color(112,7,178);
  //eyelids();
  //}
  //else {
  //  eyelidColor = color(0,0,0,0); //255;
  //}
//}

function hill(x,y,w,h) {
  fill(color(0,255,0));
  stroke(0);
  arc(x+(w/2),y,w,h,PI,0,PIE);
}

function cloud(x,y,w,h) {
  fill(255);
  noStroke();
  arc(x,y,100,(h/2),PI,0,CHORD);
  arc(x+(w/2),y,100,h,PI,0,CHORD);
  arc(x+w,y,150,(h*.75),PI,0,CHORD);
}