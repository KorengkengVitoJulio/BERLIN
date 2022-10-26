//review materi 
console.log("Proses 1");
console.log("Proses 2");
console.log("Proses 3");
console.log("Proses 4");
console.log("Proses 5");

//Asynchronous
/*
console.log("Proses 1");
setTimeout(()=>{
    console.log("Proses 2 (Mengambil data API)");
},5000);
setTimeout(()=>{
    console.log("Proses 3");
},2000);
console.log("Proses 4");
setTimeout(()=>{
    console.log("Proses 5 (Menggunakan data API)");
},3000);
*/
// 2. concurent
//Menggunakan proses callback
//Then - Catch
/*
    setTimeout(()=>{
        console.log("Proses 1)");
        setTimeout(()=>{
            console.log("Proses 2 (Mengambil data API)");
            setTimeout(()=>{
             console.log("Proses 3");
                setTimeout(() => {
                    console.log("Proses 4");        
                    setTimeout(()=>{
                        console.log("Proses 5 (Menggunakan data API)");
            },2000);
        },5000);
    },2000)
},3000);
*/
//Promise 
//ada dua cara mengunakan promise 
/*
newPromise
.then((result)=>result)
.then((result2) =>{
    console.log (result2);
})
.catch((error))
//async/Await
/*
- Mengubah function sysnchronous menjadi asynchronous
- Await, menunda eksekusi hungga proses asynchronous selesai
*/
/*
const getData = async()=>{
    const result = await newPromise;
    console.log(result);
};
getData();
*/
// menggunakan fecth
fetch("https://jsonplaceholder.typicode.com/")
.then ((Response)=>Response.json())
.then ((json.Response){
    json.forEach((item) =>console.log(item.name))   
    });

//
const getDataUsers

