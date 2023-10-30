// nested
// labled - forni nomlash

// lub: for (let i=0; i<10; i++) {
//     boshqa: for (let j=1; j<10; j++) {
//         if (j===5) {
//             continue lub; //bunda continue asosiy for uchun ham ishlaydi
//         }else if (j===8) {
//             break;
//         }
//         console.log(i,j);
//     }
// }

// Function
// 1.function declaration - aniqlamoq
//   function invocation - ishga tushurmoq
// function nima() {
//   let a = 1;
//   console.log(a + 2);
// }
// nima();
// console.log(nima());

// 2.fuction expression
// let adder = function () {
//   let num1 = 1;
//   let num2 = 2;
//   console.log(num1 + num2);
// };
// adder();

//arrow
// let greeting = () => {
//   let str1 = "Hammaga ";
//   let str2 = "Salom!";
//   console.log(str1 + str2);
// };
// greeting();

// function isPositive(num) {
//   if (num > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function isNegative(num) {
//   if (num < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPositive(5));
// console.log(isNegative(5));

// let i = 0;
// function logger() {
//     i++;
//     console.log("Ishga tushdi", i);
// }

// setTimeout(logger, 1000); //bu shu funcsiyani 1 sekundan keyin ishga tushuradi
// setInterval(logger, 1000); //bu har 1 secundda ishga tushuradi

// let iId = setTimeout(logger, 1000);
// let iTd = setInterval(logger, 1000);
// function

//function adder(num1=1, num2=2){
    //num1 = num1 || 1 -- num1 ||= 1;
    //num1 = num1 || 1 -- num2 ||= 2;
//}


// let red = "qizil";
// let yellow = "sariq";
// let green = "yashil";

// function redLight() {
//     console.log(red);
// }
// function yellowLight() {
//     console.log(yellow);
// }
// function greenLight() {
//     console.log(green);
// }

// function tl() {
//     redLight();

//     setTimeout(() => {
//         yellowLight();

//         setTimeout(() => {
//             greenLight();

//             setTimeout(yellowLight, 5000);
//         }, 2000);
//     }, 5000);
// }

// tl();
// setInterval(tl, 14_000);