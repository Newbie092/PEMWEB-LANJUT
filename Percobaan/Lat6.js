let x1 = 109.2773369592537;
let y1 = -7.4133692295999785; 

let x2 = 109.2721415;
let y2 = -7.413816; 

let A = Math.abs(x2 - x1);
// console.log(A);
let B = Math.abs(y2 - y1);
// console.log(B);

C = Math.sqrt( Math.pow(A,2) + Math.pow(B,2) ) * 111.319;
console.log(C);

