function diamantCarre(tabSize, minValue, maxValue){
  let t = initArray(tabSize, minValue, maxValue);
  
  i = tabSize - 1;
  while(i > 1){
    let id = Math.floor(i / 2);

    diamant(id, tabSize, t, i)
    carre(id, tabSize, t, i)

    i = id
  }

  normalize(t, maxValue)

  return t;
}

function diamant(id, tabSize, t, i){
  for(let x = id; x < tabSize; x += i){
    for(let y = id; y < tabSize; y += i){
      let moyenne = (t[x - id][y - id] + t[x - id][y + id] + t[x + id][y + id] + t[x + id][y - id]) / 4
      t[x][y] = Math.floor(moyenne + rand(-id, id));
    }
  }
}

function carre(id, tabSize, t){
  let decallage = 0;

  for(let x = 0; x < tabSize; x += id){
    if(decallage === 0){
      decallage = id;
    } else {
      decallage = 0;
    }

    for(let y = decallage; y < tabSize; y += i){
      let somme = 0;
      let n = 0;

      if(x >= id){
        somme += t[x - id][y];
        n++;
      }
      if(x + id < tabSize){
        somme += t[x + id][y];
        n++
      }
      if(y >= id){
        somme += t[x][y - id]
        n++;
      }
      if(y + id < tabSize){
        somme += t[x][y + id];
        n++
      }


      t[x][y] = Math.floor(somme / n + rand(-id, id));
    }
  }
}


function initArray(size, minValue, maxValue){
  let t = Array.from({length: size}, () => Array.from({length: size}, () => 0));

  t[0][0] = rand(minValue,maxValue);
  t[0][size-1] = rand(minValue,maxValue);
  t[size-1][size-1] = rand(minValue,maxValue);
  t[size-1][0] = rand(minValue,maxValue);

  return t;
}

function normalize(t, maxValue){
  let min = 0;
  let max = maxValue;

  for(let x = 0; x < t.length; x++){
    for(let y = 0; y < t.length; y++){
      if(t[x][y] > max){
        max = t[x][y];
      }
      if(t[x][y] < min){
        min = t[x][y];
      }
    }
  }

  if(min !== 0 || max != maxValue){
    for(let x = 0; x < t.length; x++){
      for(let y = 0; y < t.length; y++){
        t[x][y] = Math.floor(maxValue * (t[x][y] - min) / (max - min + 2))
      }
    }
  }
}

function rand(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}