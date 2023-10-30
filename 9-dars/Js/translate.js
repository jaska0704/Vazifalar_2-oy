function lugat(soz, til) {
    
    let english = {
        apple: "olma",
        pomegranate: "anor",
        apricot: "o'rik",
        cherry: "gilos",
        peach: "shaftoli",
        grapes: "uzum",
        kiwi: "kivi",
        banana: "banan",
        melon: "qovun",
        watermelon: "tarvuz",
        tomato: "pomidor",
        potatoes: "kartoshka",
        carrot: "sabzi",
        pumpkin: "qovoq",
        book:"kitob",
        bear: "ayiq"
    };
    let rus = {
      apple: "яблоко",
      pomegranate: "гранат",
      apricot: "абрикос",
      cherry: "вишня",
      peach: "персик",
      grapes: "виноград",
      kiwi: "киви",
      banana: "банан",
      melon: "дыня",
      watermelon: "арбуз",
      tomato: "помидор",
      potatoes: "картофель",
      carrot: "морковь",
      pumpkin: "тыква",
      book: "книга",
      bear: "медведь",
    };


    for (let key in english){
        if (soz === key && til === "uz") {
            return english[key];
        }
    }
    for (let key in rus){
        if (soz === key && til === "rus") {
          return rus[key];
        }
    }
}

console.log(lugat(prompt("so'zni kirgizing: "), prompt("tilni ham kiriting: ")));
