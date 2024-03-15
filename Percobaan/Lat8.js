function konversiNilaiKeHuruf(nilai) {
    if (nilai >= 90) {
        return 'A';
    } else if (nilai >= 80) {
        return 'B';
    } else if (nilai >= 70) {
        return 'C';
    } else if (nilai >= 60) {
        return 'D';
    } else {
        return 'E';
    }
}

let nilaiAngka = [75, 85, 95, 60, 45];
let nilaiHuruf = nilaiAngka.map(konversiNilaiKeHuruf);
console.log("Konversi nilai angka ke huruf:");
console.log(nilaiHuruf);

let bilanganArray = Array.from({ length: 13 }, (_, index) => index + 1);
let bilangan1to13 = bilanganArray.map(bilangan => bilangan);
console.log("Bilangan dari 1 sampai 13:");
console.log(bilangan1to13);

let kelipatanDua = Array.from({ length: 10 }, (_, index) => (index + 1) * 2);
console.log("Bilangan kelipatan 2 dari 2 sampai 20:");
console.log(kelipatanDua);

