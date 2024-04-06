function diamantCarre(tabSize, minValue, maxValue){
  let t = initArray(tabSize, minValue, maxValue);

  diamant(t, tabSize, size);
  carre(t, tabSize, size);

  return t;
}

function diamant(t, sizeTab, size){
  
  for(let x = 0; x < sizeTab; x += size){
    for(let y = 0; y < sizeTab; y += size){
      const last = size - 1;
      t[x + last / 2][y + last / 2] = Math.round((t[x][y] + t[x][y + last] + t[x + last][y] + t[x + last][y + last]) / 4)
      //TODO: rajouter le random
    }
  }
}

function carre(t, sizeTab, size){
  
}


function initArray(size, minValue, maxValue){
  let t = Array.from({length: size}, () => Array.from({length: size}, () => 0));

  t[0][0] = rand(minValue,maxValue);
  t[0][size-1] = rand(minValue,maxValue);
  t[size-1][size-1] = rand(minValue,maxValue);
  t[size-1][0] = rand(minValue,maxValue);

  return t;
}






/**
 * Cette fonction est juste fail
 * @param {*} n 
 * @returns 
 */
// function diamantCarre(n){
//   /*let t = new Array(size).fill(0)
//   t.forEach((value, index) => t[index] = new Array(size).fill(0))*/
//   let t = Array.from({length: 2*n+1}, () => Array.from({length: 2*n+1}, () => 0));
//   let h = t.length;

//   t[0][0] = rand(-h,h);
//   t[0][h-1] = rand(-h,h);
//   t[h-1][h-1] = rand(-h,h);
//   t[h-1][0] = rand(-h,h);

//   let i = h-1
//   while (i > 1){
//     let id = Math.round(i/2) // pas

//     for(let x = id; x < h; x+=i){
//       for(let y = id; y < h; y+=i){
//         let moyenne = (t[x-id][y-id] + t[x-id][y+id] + t[x+id][y+id] + t[x+id][y-id]) / 4;
//         t[x][y] = moyenne + rand(-id, id);
//       }
//     }
//     let decallage = 0;
//     for(let x = 0; x < h; x+=id){
//       if(decallage == 0){
//         decallage = id;
//       } else {
//         decallage = 0;
//       }

//       for(let y = decallage; y < h; y+=i){
//         let somme = 0;
//         let n = 0;
//         if(x >= id){
//           somme = somme + t[x - id][y];
//           n += 1;
//         }
//         if(x + id < h){
//           somme = somme + t[x + id][y];
//           n += 1;
//         }
//         if(y >= id){
//           somme = somme + t[x][y - id];
//           n += 1;
//         }
//         if(y + id < h){
//           somme = somme + t[x][y + id];
//           n += 1;
//         }
//         t[x][y] = (somme / n) + rand(-id, id);
//       }
//     }
//     i = id;
//   }

//   return t;
// }

function rand(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}