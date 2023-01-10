class Triangle_Fan {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    beginShape(TRIANGLE_FAN);
    vertex(this.x, this.y);
    vertex(this.x + f(x), this.y);
    fill(174,80,210)
    vertex(this.x, this.y + f(x));
    fill(74,190,99)
    vertex(this.x - f(x), this.y);
    fill(255, 0, 100)
    vertex(this.x, this.y - f(x));
    fill(0, 255, 255)
    vertex(this.x + f(x), this.y);
    fill(50,78,88)
    endShape();
      x+=.1;
      if (x > zero2) {
        x = zero1;
      }
    }
}
