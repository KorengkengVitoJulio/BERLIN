//Synchronous 
/*
console.log("baris 1");
console.log("baris 2");
console.log("baris 3");
*/
//Asynchronous JS
//Asynchronus itu tidak menunggu proses yang belum selesai, dia akan jalan mencari proses yang sudah selesai
/*
console.log("baris 1");
setTimeout(()=>{
    console.log("baris 2");
},5000);
console.log("baris 3");
*/

// Menggukan Callback Function
/*
console.log("baris 1");
setTimeout(()=>{
    console.log("Get data dari API");
    setTimeout(() => {
        console.log("Menggunakan data yang di dapatkan dari API")
    }, 5000);
}, 5000);
*/
//Promise function
let constidion = true;
let newPromise = Promise((resolve, reject) => {
    if (condition){
        //apa yang dilakukan jika promise 'filfiled'
        resolve("Berhasil");
    } else{
        //apa yang dilakukan jika promise 'rejected'
        reject("Gagal");
    }
    newPromise.then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })
    
});