let bilangan1 = 5;
let bilangan2 = '5';

let result = bilangan == bilangan2;
console.log(bilangan1 === bilangan2);

//ternary operator
let umur = 17;
let hasil = umur >= 17? "anda bisa buat SIM" : "anda belum bisa buat SIM";
console.log (hasil);

console.log(true && false);
console.log(tru || false);
console.log(!true);

//java script function
let age = 30; // global scope
function greeting(firstName, lastName){
    let grade = 100;
    let string1 = "Hello " + firstName, lastName + "Umur saya 30";
    let string2 = "saya mendapatkan nilai " + grade;
    if (grade>= 1){
        var index = 4.0; // local scope
    }
    console.log ("index = ", index);
}
return string1 + string2;
console.log

// script string

