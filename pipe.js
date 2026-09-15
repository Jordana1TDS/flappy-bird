class Pipe {
  constructor (x, img){
    this.x = x;
    this.img = img;
    this.gap = 130;
    this.top =  random(50, 250);
    this.bottom = this.top + this.gap;    
  }

  exibi(){
    image (this.img, this.x, 0, 60, this.top);
    //image (this.img, this.x, this.bottom, 60, height - this.bottom);
    //Cano inferior invertido
    push();

    translate(this.x, height);
    scale(1, -1);

    image (this.img, 0, 0, 60, height - this.bottom);

    pop();
  }

  update() {
    this.x -=2;
  }
}