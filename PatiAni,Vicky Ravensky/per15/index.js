// Class in JS

//Object Literal
// const mobil1 = {
//   warna: "merah",
//   merek: "Honda",
//   transmisi: "manual",
//   nyalakanMobil: function () {
//     console.log(`Mobil ${this.merek} dinyalakan`);
//   },
// };

// console.log(mobil1.nyalakanMobil());
// const mobil2 = {
//   warna: "hitam",
//   merek: "Toyota",
//   transmisi: "matic",
// };

class Mobil {
  constructor(warna, merek, transmisi) {
    this.warna = warna;
    this.merek = merek;
    this.transmisi = transmisi;
  }

  nyalakanMobil() {
    console.log(`Mobile merek ${this.merek} dinyalakan`);
  }
}

// const honda = new Mobil("merah", "honda", "manual");
// const toyota = new Mobil("hitam", "toyota", "matic");
// console.log(honda);
// honda.nyalakanMobil();
// console.log(toyota);
// toyota.nyalakanMobil();

//Inheritance / Pewarisan (is-a relationship)

class Toyota extends Mobil {
  constructor(warna, merek, transmisi, mesin, bahanBakar) {
    super(warna, merek, transmisi);
    this.mesin = mesin;
    this.bahanBakar = bahanBakar;
  }
  //Overriding
  nyalakanMobil() {
    console.log(`Mobile merek ${this.merek} dinyalakan!!!`);
  }
  matikanMobil() {
    console.log(`Mobile merek ${this.merek} dimatikan!!!`);
  }
}

const agya = new Toyota("putih", "agya", "manual", "1200cc", "Bensin");
console.log(agya);
agya.nyalakanMobil();
agya.matikanMobil();
