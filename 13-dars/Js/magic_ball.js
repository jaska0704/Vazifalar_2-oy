const points = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

let response = document.querySelector(".response");
// response.innerHTML = points;

function blank() {
  points.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  response.innerHTML = points[0];
  response.style.fontSize = "18px";
  setTimeout(timeup, 4000);

  function timeup() {
    response.innerHTML = "8";
    response.style.fontSize = "120px";
    document.querySelector("#clear").value = "";
  }
}
