let images = ["../images/lampa.jpg", "../images/lampa-svet.jpg"];

let image = document.querySelector(".image");
let submit = document.querySelector(".submit");
let i = 0;

submit.addEventListener("click", () => {
    if (++i === images.length) {
        submit.textContent = "ON";
        i = 0;
    }else {
         submit.textContent = "OFF";
    }
    image.setAttribute("src", images[i]);
})