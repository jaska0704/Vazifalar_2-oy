let number = prompt("1 dan 10gacha bo'lgan raqam kiriting: ");
let random = Math.floor(Math.random()*10 + 1);

if (number === random) {

    alert("Siz men o'ylagan raqamni topdingiz! Ofarin!!!");

}else if (number === "") {

    alert("Siz raqam kiritishni unutdingiz!");

}else {

    alert("Afsus siz men o'ylagan raqamni topolmadingiz! Qayta urunib ko'ring!");

}