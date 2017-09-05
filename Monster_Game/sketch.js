var monster_img;
var cookie_img;
var pie_img;
var cake_img;
var points;
var misses;
var monster_x, monster_y;
var cookie_x, cookie_y;
var pie_x, pie_y;
var cake_x, cake_y;
var button;
var monsterColor;

function preload() {
  monster_img = loadImage("assets/cookie_monster.png");
  cookie_img = loadImage("assets/cookie.png");
  pie_img = loadImage("assets/pie.png");
  cake_img = loadImage("assets/cake.png");
}

function setup() {
  createCanvas(720, 400);
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  pie_x = 725;
  pie_y = random(350);
  cake_x = 725;
  cake_y = random(350);
  points = 0;
  misses = 0;
  monsterColor = color(0, 0, 0);
  button = createButton('Restart');
  button.position(200,300);
  button.mousePressed(start);
  button.hide();
}

function draw() {
//fddg
  background(200);
  displayPoints();
  tint(monsterColor);
  image(monster_img, monster_x, monster_y);
  noTint();
  image(cookie_img, cookie_x, cookie_y);
  image(pie_img, pie_x, pie_y);
  image(cake_img, cake_x, cake_y);
  
  //moveFood();
  moveCookie();
  movePie();
  moveCake();
  moveMonster();
  checkForChomp();
}

function displayPoints() {
  fill(160);
  textSize(30);
  text("Points: " + points,30,370);
}

function displayMisses() {
  fill(255,0,0);
  textSize(20);
  text("Misses: " + misses,600,370);
}

function moveCookie() {
  displayMisses();
  if(cookie_x < 0) {
    cookie_x = 725;
    cookie_y = random(350);
    misses += 1;
    //endGame();
  }
  else 
    cookie_x -= 4*points + 1;
}

function movePie() {
  if(pie_x < 0) {
    pie_x = 725;
    pie_y = random(350);
  }
  else 
    pie_x -= 2;
}

function moveCake() {
  if(cake_x < 0) {
    cake_x = 725;
    cake_y = random(350);
  }
  else 
    cake_x -= 2;
}

function moveMonster() {
  if(keyIsDown(UP_ARROW) && monster_y > 0)
    monster_y -= 2;
  if(keyIsDown(DOWN_ARROW) && monster_y < height-150)
    monster_y += 2;
  if(keyIsDown(LEFT_ARROW) && monster_x > 0)
    monster_x -= 2;
  if(keyIsDown(RIGHT_ARROW) && monster_x < 720) 
    monster_x += 2;
}

/*function moveFood() {
  moveCookie();
  if (cookie_x < 10) {
    movePie();
  }
  if (pie_x < 50) {
    moveCake();
  }
}*/

function checkForChomp() {
  var d = dist(cookie_x, cookie_y, monster_x, monster_y);
  var p = dist(pie_x, pie_y, monster_x, monster_y);
  var c = dist(cake_x, cake_y, monster_x, monster_y);
  if (d < 100) {
    points += 1;
    monsterColor = color(random(255),random(255), random(255));
    cookie_x = 725;
    cookie_y = random(350);
    
  }
  if (p < 100) {
      while (points > 0) {
      points -= 1;
    }
      misses += 1;
      pie_x = 725;
      pie_y = random(350);
  }
  if (c < 100) {
    while (points > 0) {
      points -= 1;
    }
    misses += 1;
    cake_x = 725;
    cake_y = random(350);
  }
  if(misses >= 3) {
    endGame();
  }
}

function endGame() {
  //if(misses >= 3) {
    background(0);
    fill(255);
    textSize(70);
    text("Game Over",200,200);
    text("Final Score: " + points,200,300);
    noLoop();
    button.show();

}

function start() {
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  pie_x = 725;
  pie_y = random(350);
  cake_x = 725;
  cake_y = random(350);
  points = 0;
  misses = 0;
  loop();
  button.hide();

}

