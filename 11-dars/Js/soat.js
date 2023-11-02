//Dom -- Document Object Model
//DOM Manipulation
//Getting elements

//getting elements
// let btn = document.getElementById("btn"); //-- id buyicha
// let btns = document.getElementsByClassName("maxsus");//classi buyicha
// let elements = document.getElementsByTagName("body");//teglar nomi buyicha
// let elements = document.getElementsByName("street");//name qatnashgan inputlar uchun nomi buyicha
// let elements = document.querySelector(".maxsus");//yangi usul, barchasidan birdek foydalansa bo'ladi
// let elements = document.querySelectorAll("body");//barchasiga birdek ta'sir qiladi


// //changing styles
// btn.style.backgroundColor = "black";
// btn.style.color = "red"

window.onload = function() {
    window.setInterval(function() {
        var date = new Date();

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        var clock = hours + ":" + minutes + ":" + seconds;
        document.querySelector("#clock").innerHTML = clock;
    }); 
}