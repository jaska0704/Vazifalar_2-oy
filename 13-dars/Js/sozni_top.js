let arr = ["buxoro", "madagaskar", "panda"];

let text = document.querySelector(".text");
let word = arr[Math.floor(Math.random() * arr.length)];
text.innerHTML
let newArr = [];
text = newArr;
for (let i = 0; i < word.length; i++) {
  newArr[i] = "_";
}
let letters = word.length;

while (letters > 0) {
    alert(newArr.join(" "));
    let top = prompt("So'zni topish uchun harf kiriting: ");
    if (false) {
        break;
    }else if (top.length !== 1) {
        alert("Iltimos faqat bitta harf kiriting!?")
    }else {
      for (let j = 0; j<word.length; j++) {
        if (word[j] === top) {
          newArr[j] = top;
          letters--;
        }
      }  
    }
}

alert(newArr.join(" "));
alert("Zo'r yutdingiz " + word)


