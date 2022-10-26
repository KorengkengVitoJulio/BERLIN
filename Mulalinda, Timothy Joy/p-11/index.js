//SYnchronous JS (BLOKING)
// console.log("B1");
// console.log("B2");
// console.log("B3");

//Asynchronous JS (NON BLOKING)
// setTimeout(() => {
//     console.log("Cuci baju --> Asynchronous"); // proses asynchronous
//   }, 5000);
//   console.log("Menyapu");
//   console.log("Mengepel");
//   console.log("Memasak");

//   console.log("baris 1");
//   setTimeout(() => {
//     console.log("Get data dari API");
//     setTimeout(() => {
//         console.log("Use data yang didapatkan dari API");
//     }, 3000);
//   }, 5000);

  //callback



  //Multithread/Parallel
  // console.log("proses 1");
  // setTimeout(() => {
  //   console.log("proses 2 (Mengambil data API)");
  // },5000);
  // setTimeout(() => {
  //   console.log("proses 3");
  // },2000);
  // setTimeout(() => {
  //   console.log("proses 4");
  // },3000);
  // console.log("proses 5 (Menggunakan data dari API)");

  // Concurent
  // console.log("proses 1");
  // setTimeout(() => {
  //   console.log("proses 2 (Mengambil data API)");
  //   setTimeout(() => {
  //     console.log("proses 3");
  //     setTimeout(() => {
  //       console.log("proses 4");
  //       console.log("proses 5 (Menggunakan data dari API)");
  //     },5000);
  //   },2000);
  // },3000);
  

  //promises (solusi dari callback hell)
  //2 cara menggunakan promise
  // 1. then - Catch

  // let condition = true;
  // let newPromise = new Promise((resolve, reject) => {
  //   if(condition){
  //       resolve("Ente berhasil hore");
  //   } else {
  //       reject("Ente tidak berhasil");
  //   }});

  // newPromise
  // .then((result) => {
  //   return result;
  // })
  // .then((result2) => {
  //   console.log(result2);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });


  // Async - Await
// const getData = async () => {
//   const result = await newPromise;
//   console.log(result);
// };

// getData();
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach((item) => console.log(item.name));
//   });

const axios = require("axios");

const getDataUsers = async () => {
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const json = await response.json();
    // json.forEach(({ name }) => console.log(name));

    //Axios
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    response.data.forEach(({ name }) => console.log(name));
  } catch (error) {
    console.log(`Error to get data ${error}`);
  }
};

getDataUsers();