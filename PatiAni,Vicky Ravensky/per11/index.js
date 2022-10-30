//Synchronous
// console.log("Baris 1");
// console.log("Baris 2");
// console.log("Baris 3");

//Asynchronous
// console.log("Baris 1");
// setTimeout(() => {
//   console.log("Get data dari API");
//   setTimeout(() => {
//     console.log("Menggunakan data yg didapatkan dari API");
//     setTimeout(() => {}, 5000);
//   }, 5000);
// }, 5000);

//Promise
let condition = true;
let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    // apa yang dilakukan jika promise 'fulfilled'
    resolve("Berhasil");
  } else {
    // apa yang dilakukan jika promise 'rejected'
    reject("Gagal");
  }
});

newPromise
  .then((result) => result)
  .then((result2) => {
    console.log(result2);
  })
  .catch((error) => {
    console.log(error);
  });
