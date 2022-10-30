// let & const & var
/*
var fullName = "john Doe"

var fullName = "Jack"

console.log(fullName);
*/
/*
let bilanganPi = 3.14
bilanganPi = 3.;

console.log(bilanganPi);

bilanganPi = 3.2;
console.log (bilanganPi);
*/

//deklarasi variabel
/*
const numbers = [1,2,3,4,5]
numbers[1];

console.log(numbers)
*/

//string literals
/*
let nama = "John"
let age = 30

let gtreetings = "Hello nama saya "+nama+".Umur saya"+age+"TAHUN.";

let greetings = `Hello nama saya${nama}.Umur saya${age}tahun.`;
console.log(greetings)
*/
/*
function greetings(){
    return "Hello word"

}
//functon axpression
const greetings2(){
    return "Hello world2"
}
//Arrow function
const greetings3(nama)=>{
    return `hello${nama}`;
}
console.log(greetings());
console.log(greetings("john"));

//method implisit //menjadi simple 
const greetings4= (nama)=> `hello${nama}`
*/

//default parameter

const greetings = (nama,age=35) => `hello${nama}.Umur saya${age}tahun.`;

console.log(greetings());