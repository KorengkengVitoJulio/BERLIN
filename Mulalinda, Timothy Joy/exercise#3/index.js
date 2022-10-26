let person = 
[   
    {name:"Mulalinda", age: 18},
    {name:"Gloria", age: 20},
    {name:"Autimo", age: 22},
    {name:"Mithy", age: 26}
]

let tertua = Math.max(person[0].age, person[1].age, person[2].age, person[3].age);

for (let i = 0; i < person.length; i++) {
  if (person[i].age == tertua) {
    console.log(person[i].name);
  }
}

let termuda = Math.min(person[0].age, person[1].age, person[2].age, person[3].age);

for (let i = 0; i < person.length; i++) {
  if (person[i].age == termuda) {
    console.log(person[i].name);
  }
}

// let max = person[0]
// let min = person[0]
// for(let i=0;i<person.length;i++)
// {
//   if(person[i].age > max.age)
//   {
//     max = person[i];
//   }
//   if(person[i].age < min.age)
//   {
//     min = person[i];
//   }
// }
// console.log("Tertua : ", max.name);
// console.log("Termuda : ", min.name);


let numbers = [1, 2, 3, 4, 5];
let max = numbers[0]
let min = numbers[0]
for(let i=0;i<numbers.length;i++)
{
  if(numbers[i] > max)
  {
    max = numbers[i];
  }
  if(numbers[i] < min)
  {
    min = numbers[i];
  }
}
console.log("Max : ", max);
console.log("Min : ", min);
