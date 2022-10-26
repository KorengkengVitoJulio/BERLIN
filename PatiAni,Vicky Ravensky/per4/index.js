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
// };
