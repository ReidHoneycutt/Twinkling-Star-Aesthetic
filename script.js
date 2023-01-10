let W = window.innerWidth;
let H = window.innerHeight;
let P1 = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  reSize(points1);
  for (let i = 0; i < points1.length; i+=8) {
    P1.push(new Triangle_Fan(points1[i][0], points1[i][1]));
  }
  
}

let a=15;
let b=10;
let zero1 = -b-Math.sqrt(a);
let zero2 = -b+Math.sqrt(a);
let x = zero1;


function draw() {
  background(0);
  for (let p1 of P1) {
    p1.show();
  }
  x+=.001;
  if (x > zero2) {
    x = zero1;
  }
}

function f(x) {
  return (a - Math.pow((x+b), 2));
}

function reSize(array) {
  let temp_x = [];
  let temp_y = [];
  let x;
  let y;

  // Scale original points first from image
  for (let i = 0; i < array.length; i++) {
      temp_x[i] = array[i][0];
      temp_y[i] = array[i][1];
  }
  let w = max(temp_x) - min(temp_x);
  let h = max(temp_y) - min(temp_y);

  // Create array of particle objects
  for (let i = 0; i < array.length; i++) {
      x = array[i][0] * (W/w);
      y = array[i][1] * (H/h);
      array[i][0] = x;
      array[i][1] = y;
  }
}
function mouseClicked() {
  noLoop();
}
