// let person = [{name : 'Joyy',age : 18},{name : 'Gloria',age : 20},{name : 'Bob',age: 17},{name : 'Jack',age: 20}]
// //setiap elemen array adalah objek
// //buatlah program yang menampilkan siapakah yang memiliki umur paling tua dan umur paling muda
//  let a = Math.max(person[0].age, person[1].age, person[2].age, person[3].age);

//  for(let i = 0; i < person.length; i++){
//    if(person[i].age == a){
//       console.log(person[i].name);
//    }
//  }
// let b = Math.min(person[0].age, person[1].age, person[2].age, person[3].age);

// for(let i = 0; i < person.length; i++){
//    if(person[i].age == b){
//       console.log(person[i].name);
//    }
// }

//let numbers = [1, 2, 3, 4, 5]
//let max = numbers[0];
//let min = numbers[0];

//for(let i = 0; i < numbers.length; i++){
  // if(numbers[i] > max){
    //  max=numbers[i];
   //}
   //else if(numbers[i] < min){
     // min = numbers[i];
   //}
//}

//console.log("max = ", max);
//console.log("min = ", min);

let person = [{name : 'Joyy',age : 18},{name : 'Gloria',age : 20},{name : 'Bob',age: 17},{name : 'Jack',age: 20}]
let max = person[0];
let min = person[0];

for(let i = 0; i < person.length; i++){
   if(person[i] < max.age){
      max = person[i];
   }
   else if(person[i] > min.age){
      min = person[i];
   }
}

console.log("umur paling tua = ", max.name);
console.log("umur paling muda = ", min.name);


