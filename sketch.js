let birdImage;
let fundo;
let pipeImage;
let tema;
let asa;
let hit;

let bird;
let pipes = [];


async function setup() {
  createCanvas(600, 500);
  birdImage = await loadImage('bird.png');
  pipeImage = await loadImage('pipe.png');
  fundo =  await loadImage ('fundo.png');
  tema = await loadSound ('tema.mp3');
  asa =   await loadSound ('asa.mp3');
  hit =  await loadSound ('hit.mp3');

  bird = new Bird(25, width/2, birdImage);
  pipes.push(new Pipe( width, pipeImage));
  tema.play()
}

function draw() {
  background(fundo);
  bird.exibi();
  bird.update();

    if (frameCount % 200 === 0 ) {
      pipes.push(new Pipe(width, pipeImage));
    }

  for (let pipe of pipes){
    pipe.exibi();
    pipe.update();

    if(bird.colidiu(pipe)){
      hit.play()
      noLoop();
    }
  }
}

//---------Função pressionar espaço----------//

function keyPressed ()
{
  if (key === ' ')
  {
    asa.play()
    bird.up()
  }
}