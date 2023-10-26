let son = +prompt("Istalgan sonni kiriting: ");
if (son === 0) {
    console.log("Siz juft ham, toq ham bo'lmagan son kiritdingiz!");
} else if (son % 2 === 1) {
    console.log("Siz toq son kiritdingiz!");
} else {
    console.log("Siz juft son kiritdingiz!");
}
