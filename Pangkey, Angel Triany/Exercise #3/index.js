let person =[
    {
        name : "john",
        age : 35,
    },
    {
        name : "bill",
        age : 23,
    },
    {
        name : "Bob",
        age : 17,
    },
    {
        name : "jack",
        age : 20,
    }
];

let max=person[2];
for (let i = 0; i < person.length; i++) {
    if (person[i].age > max.age) {
        max = person[i];
    }
}
console.log('Orang Tertua :');
console.log(max);
let min = person[2];
for (let i = 0; i < person.length; i++) {
    if (person[i].age <min.age) {
        min = person[i];
    }
}
console.log('Orang Termuda :');
console.log(min);