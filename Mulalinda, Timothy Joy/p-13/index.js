// Class in JS

//Object Literal
// const mobil0 = {
//     warna: 'Blue',
//     merek: 'Honda',
//     transmisi: 'Matic'
// }; console.log(mobil0);

// const mobil1 = {
//     warna: 'Blue',
//     merek: 'Honda',
//     transmisi: 'Matic'
// }; console.log(mobil1);

class mobil{
    constructor(warna, merek, transmisi){
        this.warna = warna;
        this.merek = merek;
        this.transmisi = transmisi;
    }
        onMobil(){
            console.log(`Mobil merek ${this.merek} dinyalakan`);
        }
        offMobil()
        {
            console.log(`Mobil merek ${this.merek} dimatikan`);
        }
}

// const satu = new mobil('Blue', 'BMW', 'Matic');
// const dua = new mobil('Green', 'Lamborghini', 'Manual')
// console.log(satu)
// satu.onMobil();
// console.log(dua)
// dua.onMobil();

//Inheritance / Pewarisan (is a relationship)
class Toyota extends mobil{
    constructor(warna, merek, transmisi, mesin, bahanBakar)
    {
        super(warna, merek, transmisi)
        this.mesin = mesin;
        this.bahanBakar = bahanBakar;

    }
}

const agya = new Toyota('Putih', 'Agya', 'Manual', '560cc', 'Pertalite');
console.log(agya);
agya.onMobil();
agya.offMobil();

