let person = [
  {
    name: "John",
    age: 35,
  },
  {
    name: "Bill",
    age: 23,
  },
  {
    name: "Bob",
    age: 17,
  },
  {
    name: "Jack",
    age: 20,
  },
];

/*
    Buatlah program yang menampilkan siapakah yang memiliki
    umur paling tua dan umur paling muda
*/

// let max = person[0];
// let min = person[0];

// for (let i = 0; i < person.length; i++) {
//   if (person[i].age > max.age) {
//     max = person[i];
//   }
//   if (person[i].age < min.age) {
//     min = person[i];
//   }
// }
// console.log("Paling tua : ", max.name);
// console.log("Paling muda : ", min.name);

let numbers = [9, 5, 4, 8, 12];

// numbers.forEach(function (value, index, array) {
//   console.log("Value : ", value, "Index : ", index, "Array: ", array);
// });
let output1 = numbers.forEach(function (value) {
  return value + 5;
});

console.log("array output1 : ", output1); //undefined

let output = numbers.map(function (value) {
  return value + 5;
});
console.log("Array numbers : ", numbers);
console.log("Array output : ", output);

//Filter
let personAgeFilter = person.filter(function (value) {
  return value.age > 25;
});

console.log("Umur lebih dari 17  : ", personAgeFilter);

//Find
let personAgeFind = person.find(function (value) {
  return value.name === "Bill";
});

console.log("Umur bill adalah : ", personAgeFind.age);
