// sketch.js
let car1x = 100
let car1y = 200;
let car1size = 80;

let car2x = 200;
let car2y = 400;
let car2size = 60;

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(128);

  drawCar(car1x,car1y,car1size);

  car1x = car1x + 4
  if (car1x - car1size > width) {
    car1x = car1size / 2;
  }

  drawCar(car2x,car2y,car2size);

  car2x = car2x + 6
  if (car2x - car2size > width) {
    car2x = car2size / 2; }

}

function drawCar (x, y, size) {
  //body
  rectMode(CENTER);
  strokeWeight(2);
  stroke(0);
  fill(175);
  rect(x,y,size,size/2);
  //wheels
  let offset = size / 4;
  fill(0);
  rect(x - offset, y - offset, offset, offset / 2);
  rect(x + offset, y - offset, offset, offset / 2);
  rect(x - offset, y + offset, offset, offset / 2);
  rect(x + offset, y + offset, offset, offset / 2);

}

