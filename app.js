const n = 3;
const size = 2*n+1;
const canvasSize = 400;
const tileSize = canvasSize / size;

const maxValue = 16;

let t

function setup(){
  createCanvas(canvasSize, canvasSize);
  background(0);

  // t = Array.from({length: size}, () => Array.from({length: size}, () => rand(0, maxValue)));
  t = diamantCarre(size, 0, maxValue);
  
  console.log(tileSize)
  for(let x = 0; x < size; x++){
    for(let y = 0; y < size; y++){
      fill(t[x][y] / maxValue * 255);
      noStroke();
      rect(x*tileSize, y*tileSize, tileSize);
    }
  }
}

function draw(){
  
}