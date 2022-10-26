//concat
let letters= ['I', 'LOVE', 'YOU'];
let number = "3000";
let me = letters.concat(number);
console.log(me);

//includes
let word=['I', 'LIKE', 'LEARNING', 'PROGRAMMING'];
console.log(word.includes('LEARNING'));
console.log(word.includes('learning'));

//length
let str = 'Javascipt string length';
console.log("The length property returns the length of a string:");
console.log(str.length);

//split
let text = "I LOVE YOU";
let myWord = text.split(" ");
console.log(myWord);

//slice
const plants='Palem, Melati, Kamboja, Kembang, Mawar, Pinus';
console.log(plants.slice(0, 5));

//substring
let p = "Palem, Melati, Kamboja, Kembang, Mawar, Pinus";
let ss = p.substring(0, 3);
console.log(ss);

//toLowercase
let letter2 = 'I, LOVE, YOU';
let kecil = letter2.toLowerCase();
console.log(kecil);

//toUpperCase
let letter3 = "Palem, Melati, Kamboja, Kembang, Mawar, Pinus";
let besar = letter3.toUpperCase();
console.log(besar);

//trim
let letter4 = "     my name is gloria      ";       
let trm = letter4.trim();
console.log(letter4);
console.log(trm);

//valueof
let text2 = "I LOVE YOU";
let myWord2 = text2.valueOf();
console.log(myWord2);



