// let bil1 = 2
// let bil2 = '2'

// console.log(bil1 === bil2)

// // ternary operator
// let umur = 17
// let hasil = umur >= 17 ? "Anda bisa buat SIM" : "Anda belum bisa buat SIM"

// console.log(hasil)

// console.log(true && true)
// console.log(true || false)
// console.log(!true)

// javascript function
// function greetings(satu, dua)
// {
//     return"Sawadikap" + satu + dua
// }console.log(greetings() " Melakoy" + " Laporta")


// let greetings2 = function()
// {
//     return"HAOYYY"
// }console.log(greetings2())

// let age = 30 //global scope
// function greetings(satu, dua)
// {
//     let grade = 100 //local scope(function)
//     let string = 
//     return "Sipzap" + satu + dua +", Umur saya " + age

//     let string2 = "saya mendapat nilai" + grade
//     if(grade>=1)
//     {
//         let index = 4.0; //local scope(block)
//     }
//     return string1 + string2
// }console.log(greetings("hahoyy", "Salorpa"));

// // javascript string


let bilangan1 = 5;
let bilangan2 = "5";

console.log(bilangan1 === bilangan2);
//Ternary Operator

let umur = 15;
let hasil = umur >= 17 ? "Anda bisa buat SIM" : "Anda belum bisa buat SIM";
console.log(hasil);

console.log(true && false);
console.log(true || false);
console.log(!true);

//JavaScript Function
let age = 30; //Global Scope

function greetings(firstName, lastName) {
  let grade = 100; //Local Scope (function)
  let string1 =
    "Hello " + firstName + lastName + ". Umur saya " + age + " tahun. ";
  let string2 = "Saya mendapat nilai " + grade;
  if (grade >= 1) {
    let index = 4.0; //Local Scope (Block)
    console.log("index = ", index);
  }

  return string1 + string2;
}
// console.log("Nilai saya " + grade);
console.log(greetings("John ", "Doe"));

// console.log(greetings2());

// let greetings2 = function () {
//   return "Hello World dengan return value !!!";
// };cmd

