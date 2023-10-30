
let random = Math.floor(Math.random()*10+1);

for (urunishlar_soni=5; urunishlar_soni>0; urunishlar_soni--){
    let son = +prompt("Men bir son o'yladim, topib ko'ringchi: ")
    if (random === son) {
        alert("Siz yutdingiz. Men chindan ham " + random + " sonini o'ylagan edim. Ofarin!")
        break;
    }else {
        alert("Siz topolmadingiz! Sizda " + (urunishlar_soni-1) + " ta urunish qoldi " +  random)
    }
}
