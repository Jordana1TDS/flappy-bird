class Bird {
  constructor (x, y, img){
    this.x = x;
    this.y = y;
    this.gravidade = 0.3;
    this.vel = 0;
    this.lift = -7;
    this.img = img;
  }
  exibi(){
    image (this.img, this.x, this.y, 60, 50);
  }
  update(){
    this.vel += this.gravidade;
    this.vel *= 0.95;
    this.y += this.vel;
  }

  up (){
    this.vel += this.lift;
  }

  colidiu(pipe){
    if (
      this.x + 60 > pipe.x &&
      this.x < pipe.x + 60 &&
      (this.y < pipe.top || this.y + 50 > pipe.bottom)
    ) {
      return true;
    }
    return false;
  }
}