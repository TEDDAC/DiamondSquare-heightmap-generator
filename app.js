const n = 256;
const size = 2*n+1;
const canvasSize = size;
const tileSize = canvasSize / size;

const maxValue = 7;

let t

function setup(){
  createCanvas(canvasSize, canvasSize);
  background(0);

  // t = Array.from({length: size}, () => Array.from({length: size}, () => rand(0, maxValue)));
  t = diamantCarre(size, 0, maxValue);
  console.table(t)

  for(let x = 0; x < size; x++){
    for(let y = 0; y < size; y++){
      const value = t[x][y];
      if(value === 0){ // fond marin
        fill(3, 69, 252);
      } else if(value === 1){ // haut fond
        fill(28, 123, 255);
      } else if(value === 2){ // plage
        fill(255, 238, 150);
      } else if(value === 3){ // plaine
        fill(155, 250, 72);
      } else if(value === 4){ // foret
        fill(46, 184, 0);
      } else if(value === 5){ // roche
        fill(130);
      } else if(value >= 6){ // neige
        fill(255);
      }
      //fill(t[x][y] / maxValue * 255);

      noStroke();
      rect(x*tileSize, y*tileSize, tileSize);
    }
  }
}

function draw(){
  
}