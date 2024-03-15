// Condition ? expression 1 : expression 2 
let ishujan = 'true';
let handlehasil = ishujan ? 'Bawa Payung' : 'Abaikan';
console.log (handlehasil);

// Condition ? expression 1 : expression 2 
var umur = 19;
var isbolehmengemudi = umur > 17 ? 'True' : 'false';
console.log(isbolehmengemudi);

//Case IF ELSE
var age = 20;
var candrive;
if (age > 16) {
    candrive = 'yes';
} else {
    candrive = 'no';
}
console.log (candrive);

// jika skor lebih dari 86 maka nilai A
// jika skor kurang dari 81 maka tidak dapat nilai B
let skor = 72;
let nilai = (skor >= 86 && skor <= 100) ? 'A' :
            (skor >= 81 && skor < 86) ? 'A-' :
            (skor >= 76 && skor < 81) ? 'B+' :
            (skor >= 71 && skor < 76) ? 'B' :
            (skor >= 66 && skor < 71) ? 'B-' :
            (skor >= 61 && skor < 66) ? 'C+' :
            (skor >= 56 && skor < 61) ? 'C' :
            (skor >= 51 && skor < 56) ? 'D' :
            (skor >= 0 && skor < 51) ? 'E' :
            'Nilai anda tidak ada';

console.log(nilai);


let nama ;

nama = 'Pawit Ryan Febrianto';

console.log(nama);


// luas persegi panjang
let p, l, luas;

p = 40;
l = 82 ;
luas = p * l;

console.log(luas);


let a = 3 ;
let b = 4 ;

c = Math.sqrt( Math.pow(a,2) + Math.pow(b,2) ) ;

console.log(c);


// console.log(a * a);
// console.log(b * b);
// console.log((a*a) + (b*b));

// c = Math.sqrt((a*a) + (b*b)) ;


let x1 = 1;
let x2 = 4;
let y1 = -2;
let y2 = -5;

let A = Math.abs(x2 - x1);
console.log(A);
let B = Math.abs(y2 - y1);
console.log(B);

C = Math.sqrt( Math.pow(A,2) + Math.pow(B,2) ) ;
console.log(C);


