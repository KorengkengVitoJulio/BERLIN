// REST PARAMETER

const absent = (...ai) => {
    console.log("Selalu Alpa",ai);
  }
  absent("Vito", "Erick", "Clement", "Alo", "Utu", "Yanto");


// REST PARAMETER DIGUNAKAN SEBAGAI PARAMETER TERAKHIR
const absen = (a1, a2, a3, ... aa) => {
    console.log("Hadir",a1);
    console.log("Hadir",a2);
    console.log("Hadir",a3);
    console.log("Tidak Hadir ",aa);
  }
  absen("Vito", 10, "Clement", "Alo", "Utu", "Yanto");


  //SPREAD PARAMETER
  function sum(a, b, c){
    return a * b + c;    
  } 
  const angka = [25, 50, 100];
  console.log(sum(...angka));


