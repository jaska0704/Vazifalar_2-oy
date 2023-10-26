// let str = "Lorem ipsum dolor sit Atment";

//console.log(str.length); - uzunligini o'lchab beradi
// console.log(str.charAt(3));- ko'rsatilgan indexda nima turganini ko'rsatadi
// console.log(str.charCodeAt(22)); - biz so'ragan indexdaki ma'lumotni asci daki o'rnini raqamini ko'rsatadi
// console.log(str.concat("Eshmat", "Toshmat")); - piluslarsiz qo'shib beradi
// console.log(str.endsWith("tment")); - bilan tugaganmi yoki yo'q
// console.log(str.startsWith("dolor")); - bilan boshlanadimi
// console.log(str.includes("j")); - shu harf bor yoki yo'qligini ko'rsatadi
// console.log(str.indexOf("a")); - chap tomondan izlab keladi topsa indexini ko'rsatadi
// console.log(str.lastIndexOf("a")); - o'ng tomondan izlab kelaDI topsa indexini ko'rsatadi
// console.log(str.padEnd(55, "0")); - biz ko'rsatgan raqamdan yetmaganini ikkinchida quygan elementlarimiz bilan to'ldirib beradi
// console.log(str.padStart(10, "0")); - biz ko'rsatgan raqamdan yetmaganini ikkinchida quygan elementlarimiz bilan to'ldirib beradi oldiga
// console.log(str.repeat(3)); - stringni biz istagancha takrorlab beradi
// console.log(str.replace(" ", ",")); - biz ko'rsatgan joyga, biz ko'rsatgan elementni qo'yib beradi
// console.log(str.replaceAll(" ", ",")); - bunda barcha bo'sh joylarga qo'yib beradi
// console.log(str.search("ent")); - biz izlagan element nechinchi elementdan boshlashini ko'rsatadi
// console.log(str.slice(14)); - biz ko'rsatgan indexdan boshlab chiqarib beradi
// console.log(str.split(" ")); - bo'sh joylar bor joylardan alohida string yasab beradi
// console.log(str.toLowerCase()); - barcha harflarni kichik qilib beradi
// console.log(str.toUpperCase()); - barcha harflarni katta qilib beradi
// console.log(str.trim());  - ikki tomonida bo'sh joylarni olib tashlaydi
// console.log(str.trimStart()); - chap tomondaki bo'sh joylarni olib tashlaydi
// console.log(str.trimEnd()); - o'ng tomondaki bo'sh joylarni olib tashlaydi

// let fruits = [
//   "Apple",
//   "Lime",
//   "Banana",
//   "Cherry",
//   ["Strawberry", "Water melon", ["Limon"]],
// ];

// console.log(fruits)

//Array uchun

// console.log(fruits.length);
// console.log(fruits.concat(["Pear", 'Line']));
// console.log(fruits.flat(2));
// console.log(fruits.includes("apple"));
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.lastIndexOf("Apple"));
// console.log(fruits.join("+"));
// console.log(fruits.reverse());
// console.log(fruits.splice(1,3));
// console.log(fruits.sort());

// fruits.push("Strawberry");
// fruits.unshift("Strawberry");
// fruits.pop();
// fruits.shift();
// fruits.splice(2, 0, "Straw", "Pineapple");
// fruits.splice(fruits.length, 0, "Strawberry");
// fruits.splice(0, 0, "Strawberry");
// fruits.splice(0, 1);
// fruits.splice(fruits.length -1, 1);
// console.log(fruits);

let ism = prompt("Ismingizni kiriting: ");
let yil = prompt("Tug'ilgan yilingizni kiriting: ");
let oy = prompt("Tug'ilgan oyingizni raqamlar ko'rinishida kiriting: ");
let kun = prompt("Tug'ilgan kuningizni kiriting: ");

let hozir = Date.now();
let sana = new Date(yil, (oy-1), kun).getTime();

let yil1 = parseInt((hozir-sana)/1000/60/60/24/365.25);
let oy1 = parseInt((hozir-sana) / 1000 / 60 / 60 / 24 % 365.2 / (365.25/12));
let kun1 = parseInt((hozir-sana) / 1000 / 60 / 60 / 24 % 365.18 % (365.25/12));
let soat1 = parseInt((hozir-sana) /1000 / 60 / 60 % 24);

console.log(
  "Hurmatli " +
    ism +
    " ustoz, siz " +
    yil1 +
    " yil, " + 
    oy1 +
    " oy, " + 
    kun1 +
    " kun " +
    soat1 + 
    " soat" +
    " yashabsiz"
);

let mevalar = ["Olma", "Anor", "Limon", "Shaftoli", "Behi"];
console.log(mevalar)
let meva = prompt("Qanday mevani qo'shishni istaysiz: ");
mevalar.push(meva);
console.log(mevalar);
mevalar.splice(0, 1);
console.log(mevalar);
