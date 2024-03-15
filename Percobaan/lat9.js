let X1 = 1;
let Y1 = -2;
let X2 = 4;
let Y2 = -5;

let jarak = Math.sqrt(Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2));
console.log(`Jarak antara kedua titik (${X1}, ${Y1}) dan (${X2}, ${Y2}) adalah ${jarak}`);


let latAsrama = -7.4152799;
let lonAsrama = 109.2704219;
let latFTS = -7.413795379490188;
let lonFTS = 109.27217921913267;

let jarakM = Math.sqrt(Math.pow((latFTS - latAsrama) * 111319, 2) + Math.pow((lonFTS - lonAsrama) * 111319, 2));
console.log(`Jarak antara asrama Unggulan UMP dan FTS UMP adalah ${jarakM.toFixed(2)} meter`);
