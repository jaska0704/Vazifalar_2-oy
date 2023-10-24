// let name = prompt("Ismingizni kiriting: ");
// console.log("meni ismim " + name);
/*type conversion
string, boolen --> number
NaN --> Not a Number
let a -"1234.56"
Number() constructor function
console.log(parseInt(a));--stringni songa nuqtadan keyingilarini olib tashab chiqaradi
console.log(parseFloat(a));--stringni qandoq bo'lsa shundoq songa aylantirib beradi
console.log(+a)-->stringni songa aylantirib beradi
console.log(a*1) 
console.log(a/1) 
console.log(a-1)
console.log(3+a)

let a = 123.45;
string() constructor function
console.log(String(a))-->sonni stringa aylantirib beradi.
console.log(a + "") -->bu ham

console.loge(a.toString(16)) --> sonni 16 lik sanoq sistemasiga o'girib stringa aylantirib beradi;
console.log(a.toFixed(5)) --> sonni nuqtadan keyin 5 ta son bilan olib stringa aylantirib beradi;

Operators
-Arifmetic
+ - * / % ++ --;

-Comparison (Taqqoslash);
> < <= >= == === != !==
console.log(1 === "1") --> bunda faqat ikkalasi ham true chiqsagina true chiqadi. avval stringni son bilan taqqoslaydi, keyin sonni songa taqqoslaydi
console.log(1 !== "1") --> bunda faqat bir tekshiruv true chiqsa natija true chiqadi. avval string bilan keyin son bilan solishtiradi

-Logical 
and --> &&, or --> ||, not --> !;
*/ 

let yosh = prompt("Yoshingizni kiriting: ");
console.log("Demak siz " + (2023 - yosh) + "- yilda tug'ilgansiz.");
console.log("3 yildan so'ng siz " + (3+ +yosh) + " yoshda bo'lasiz aziz do'stim!");
let age = prompt("Nechchi yoshda bo'lib qolishni xoxlardingiz?: ");
console.log("Unda siz yana " + (age-yosh) + " yil kutishingizga to'g'ri keladi")