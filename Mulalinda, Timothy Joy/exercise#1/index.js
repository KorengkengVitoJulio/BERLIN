//CONCAT
let nameone = "Buzz";
let nametwo = "Lightyear";
let str;

str = nameone + " " + nametwo;
str = nameone.concat(" ", nametwo, ".");

console.log('Character Toy Story : ' + str);


//INCLUDES
let pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));

//LENGHT
let element = ['api', 'air', 'batu', 'angin', 'es'];
console.log(element.length);

//SPLIT
let text = "How are you doing today?";
let myArray = text.split(" ");
console.log(myArray[3]);

//SLICE
let kata = "My name Timothy Joy Mulalinda"
let slc = kata.slice(3, 7);
console.log(slc);

//SUBSTRING
let contoh = "INTEGER";
let exsubstring = contoh.substring(0, 3);
console.log(exsubstring);

//toLowerCase
let klmat = "MY NAME IS TIMOTHY JOY MULALINDA";
let exlwrcase = klmat.toLowerCase();
console.log(exlwrcase);

//toUpperCase
let kalimat = "my name is timothy joy mulalinda";
let exuppercase = kalimat.toUpperCase();
console.log(exuppercase);

//TRIM
let klmt = "   Timothy    ";
let extrim = klmt.trim();
console.log(extrim);

//ValueOf
function MyNumberType(n) {
    this.number = n;
  }
  
  MyNumberType.prototype.valueOf = function() {
    return this.number;
  };
  
let object1 = new MyNumberType(4);
console.log(object1 + 3);

//===============================================================

const array = ["INT", "FLOAT", "CHAR", "STRING"];
console.log(array.valueOf());
  
