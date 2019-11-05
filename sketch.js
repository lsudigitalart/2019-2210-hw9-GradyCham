var car, car2, car3, car4

function setup() {
  createCanvas(2000, 800)

  car = new Car (int(random(1, 8)),5, 250, 100, 60, 20, 100, 0, int(random(0, 255)), int(random(0, 255)), int(random(0, 255)));
  car2 = new Car (int(random(1, 8)),5, 400, 100, 60, 20, 100, 0, int(random(0, 255)), int(random(0, 255)), int(random(0, 255)));
  car3 = new Car (int(random(1, 8)),5, 550, 100, 60, 20, 100, 0, int(random(0, 255)), int(random(0, 255)), int(random(0, 255)));
  car4 = new Car (int(random(1, 8)),5, 700, 100, 60, 20, 100, 0, int(random(0, 255)), int(random(0, 255)), int(random(0, 255)));
}

function draw() {
  background(100);
  noStroke();
  fill (0,170, 255);
  rect (0,0, 2000, 200);
  fill(0);
  textSize(50);
  text("Click the lane of your favorite car!", 10, 50);
  text ("SCROLL RIGHT", 500, 100)
  text("Don't go too fast or you might stop!", 10, 150);
  stroke (255);
  strokeWeight(5);
  line (0,200, 2000, 200);
  line (0,350, 2000, 350);
  line (0,500, 2000, 500);
  line (0,650, 2000, 650);
  car.move();  
  car2.move();
  car3.move();
  car4.move();
  
  if (car.x + 90 > width){
    fill(0);
    rect (0,0, width, height);
    stroke(255);
    fill(255);
    textSize(350);
    text ("Car 1 Wins!", 50, 400);
	car2.speed = 0;
	car3.speed = 0;
	car4.speed = 0;
  }
  if (car2.x + 90 > width){
    fill(0);
    rect (0,0, width, height);
    stroke(255);
    fill(255);
    textSize(350);
    text ("Car 2 Wins!", 50, 400);
	car.speed = 0;
	car3.speed = 0;
	car4.speed = 0;
  }
  if (car3.x + 90 > width){
    fill(0);
    rect (0,0, width, height);
    stroke(255);
    fill(255);
    textSize(350);
    text ("Car 3 Wins!", 50, 400);
	car.speed = 0;
	car2.speed = 0;
	car4.speed = 0;
  }
  if (car4.x + 90 > width){
    fill(0);
    rect (0,0, width, height);
    stroke(255);
    fill(255);
    textSize(350);
    text ("Car 4 Wins!", 50, 400);
	car.speed = 0;
	car2.speed = 0;
	car3.speed = 0;
  }
}

function Car(tempSpeed, x, y, sizeX, sizeY, curve1, curve2, curve3, r, g, b ) {

  this.speed = tempSpeed;
  this.x = x;
  this.y = y;
  this.sizeX = sizeX;
  this.sizeY = sizeY;
  this.curve1 = curve1;
  this.curve2 = curve2;
   this.curve3 = curve3;
  this.r = r;
  this.g = g;
  this.b = b;

this.move = function(){
  this.x += this.speed;
  noStroke();
  fill(this.r, this.g, this.b);
  rect (this.x, this.y, this.sizeX, this.sizeY, this.curve1, this.curve2, this.curve3);
  fill(0);
  circle (this.x+20, this.y +60, 30);
  fill(175);
  circle (this.x+20, this.y +60, 10);
  fill(0);
  circle (this.x+80, this.y +60, 30);
  fill(175);
  circle (this.x+80, this.y +60, 10);
}
}

function mouseReleased(){
  if (car.x + 90 < width && car2.x + 90 < width && car3.x + 90 < width && car4.x + 90 < width){
	  
  	if ( mouseY > 200 && mouseY < 350){
  	  car.speed++;
  	  car2.speed= int(random(1, 8));
  	  car3.speed = int(random(1, 8));
  	  car4.speed = int(random(1, 8));
  	  if (car.speed > 8){
  	    car.speed = 0;
  	  }
  	}
  	if ( mouseY > 350 && mouseY < 500){
  	  car.speed = int(random(1, 8));
  	  car2.speed ++;
  	  car3.speed = int(random(1, 8));
  	  car4.speed = int(random(1, 8));
  	  if (car2.speed > 8){
  	    car2.speed = 0;
  	  }
  	}
  	if ( mouseY > 500 && mouseY < 650){
  	  car.speed = int(random(1, 8));
  	  car2.speed = int(random(1, 8));
  	  car3.speed++;
  	  car4.speed = int(random(1, 8));
  	  if (car3.speed > 8){
  	    car3.speed = 0;
  	  }
  	}
  	if ( mouseY > 500 && mouseY < 650){
  	  car.speed = int(random(1, 8));
  	  car2.speed = int(random(1, 8));
  	  car3.speed = int(random(1, 8));
  	  car4.speed++;
  	  if (car4.speed > 8){
  	    car4.speed = 0;
  	  }
  	}
  }
}