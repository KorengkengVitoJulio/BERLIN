// Class in JS
/*
const Mobil = {
    warna: "Merah",
    merek: "Honda",
    transmisi: "Manual"
    nyalahkanMobil : function(){
        console.log("Mobil $ {this.merek} dinyalahkan");
    }
};
*/
/*

const Mobil2 = {
    warna: "Hitam",
    merek: "Toyota",
    transmisi: "Matic"
};
console.log(Mobil2)

/*
class Mobil {
    constructor(warna, merek, transmisi){
        this.warna = warna;
        this.merek = merek;
        this.transmisi = transmisi;

    }
    nyalahkanMobil(){
        console.log('Mobil $ {this.merek} dinyalahkan');
    }
} 

const Honda = new Mobil("Merah","Honda","Manual");
const Toyota = new Mobil("Hitam","Toyota","Matic");
console.log(Honda);
console.log(Toyota);
*/
//inheritance/pewarisan (ia-a relationship)

class Toyota extends Mobil{
    constructor(warna,merek,transmisi){
        super(warna,merek,transmisi);
        this.mesin = mesin;
        this.bahanBakar = bahanBakar;
    }
}
//Overiding
nyalahkanMobil(){

}
matikanMobil(){
    
}
const agya = new Toyota('Putih','Agya','Manual','1200cc','Bensin')
console.log(agya);
agya.nyalahkanMobil();
*/