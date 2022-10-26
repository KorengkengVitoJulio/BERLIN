// let vs const vs var
// let tidak bisa sama tapi nilainya bisa di ubah
// const tidak bisa sama terus nilainya tidak bisa di ubah, element dalam array bisa di ganti.
// jika deklarasi nilai sama maka tidak ada terjadi error

// var fullname = "Utu";
// var fullname = "alo";
// console.log(fullname);

const numbers = [1, 2, 3, 4, 5];
numbers[1] = 10;
console.log(numbers);
// numbers = [6, 7, 8];

//STRING LITERAL

// let name = "Mulalinda";
// let age = 18;

// let greetings = "Hello, my name " + name + ". My age " + age + " tahun";
// console.log(greetings);

// //ES6
// let greetings6 = `Hello my name ${name}. My age ${age} tahun`;
// console.log(greetings6); 


//ARROW FUNCTION
function greetings()
{
    return "Hello World";
}
const greetings2 = function()
{
    return "Hello World2";
}

//Arrow Function
// const greetings3 = (nama) => {
//     return `Hello ${nama}`;
// }
// console.log(greetings());
// console.log(greetings3("Mulalinda"));

// const greetings4 = (name) => `Hello ${name}`;
// console.log(greetings4("Mulalindaa"));

//Default Parameter
const greetingss = (nama = "Unnamed", age) => `Hello ${nama}, umur saya ${age}`;
console.log(greetingss("Mulalinda", 18));




