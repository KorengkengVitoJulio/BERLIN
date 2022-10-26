//JS String Length
let txt = "Yakobus Was Here";
let length = txt.length;
console.log(length);

//JS String slice()
// JS selalu menghitung selalu dari 0(posisi pertama adalah 0, posisi kedua adalah 1)
let str = "yakobus, yakobus, yohanes";
let part = str.slice(7, 13);
console.log(part);
// jika parameternya adalah negatif maka akan di hitung dari beelakang
let pat = str.slice(-12, -6)
console.log(pat);
// jika kita menghilangkan parameter ke 2 maka JS akan memoting dari parameter pertama sampai akhir
let pet = str.slice(7);
console.log(pet);
// berlaku juga untuk parameternya negatif, tapi akan di hitung dari belakang.
let pe = str.slice(-12);
console.log(pe);


// JS String substring()
let yak = str.substring(7, 13);
console.log(yak);

// JS String substr()
let yako = str.substr(7, 6);
console.log(yako);
//dengan  satu parameter
let yakob = str.substr(7);
console.log(yakob);
//dengan parameter bernilai negatif
let yakobu = str.substr(-7);
console.log(yakobu);

// JS String toUpperCase()
let txt2 = txt.toUpperCase();
console.log(txt2);
// JS String toLowerCase()
let txt3 = txt.toLowerCase();
console.log(txt3);

// JS String concat()
let text1 = "Yakobus";
let text2 = "Was Here";
let text3 = text1.concat(" ", text2);
console.log(text3);
// concat untuk operator plus
text = "Yakobus" + " " + "Was" + " " + "Here!";
console.log(text);

txtt =  "Syalom".concat(" ", "World!");
console.log(txtt);

// JS String trim()
//menghapus spasi
let ykbs = "      Yakobus  was here    ";
let ykbss = ykbs.trim();
console.log(ykbss);

//JS String split()
let yu = str.split(",")
console.log(yu);

//Js String include()
let ty = "yakobus at, unklab"
let rt = ty.includes("at", 7);
console.log(rt);

//Js String valeuof
//let bil =
let re = 564 +6;
let yui = re.valueOf();
console.log(yui);