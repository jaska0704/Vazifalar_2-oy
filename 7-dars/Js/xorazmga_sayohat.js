let ulov = prompt(
  "Hurmatli ustoz ulovlardan birini tanlab yozing (Piyoda / Velosiped / Avto / Poyezd / Samalyot): "
);

let piyoda1 = 1100 / 2 / 24;
let piyoda1_soat = (1100 / 2) % 24;
let velo = parseInt(1100 / 20 / 24);
let velo_soat = parseInt(1100 / 20 % 24)
let avto1 = 1100 / 70;
let avto_min = ((1100 % 70) * 60) / 70;
let poyezd1 = 1100 / 150;
let poyezd_min = ((1100 % 150) * 60) / 150;
let samalyot1 = 1100 / 880;
let samalyot_min = ((1100 % 880) * 60) / 880;

if (ulov.toLowerCase() === "piyoda") {
  alert(
    "Hurmatli ustoz siz Xorazmga piyoda to'xtamasdan yursangiz " +
      parseInt(piyoda1) + " kun, " + parseInt(piyoda1_soat) + 
      " soatda yetib borar ekansiz! Xudo sabr bersin!"
  );
} else if (ulov.toLowerCase() === "velosiped") {
  alert(
    "Hrmatli ustoz siz Xorazmga bu ulov bilan " +
      velo + " kun, " + velo_soat + 
      " soatda yetib borar ekansiz!"
  );
} else if (ulov.toLowerCase() === "avto") {
  alert(
    "Hrmatli ustoz siz Xorazmga bu ulov bilan " +
      parseInt(avto1) +
      " soat, " +
      parseInt(avto_min) +
      " minutda yetib borar ekansiz!"
  );
} else if (ulov.toLowerCase() === "poyezd") {
  alert(
    "Hrmatli ustoz siz Xorazmga bu ulov bilan " +
      parseInt(poyezd1) +
      " soat, " +
      parseInt(poyezd_min) +
      " minutda yetib borar ekansiz!"
  );
} else if (ulov.toLowerCase() === "samalyot") {
  alert(
    "Hrmatli ustoz siz Xorazmga bu ulov bilan " +
      parseInt(samalyot1) +
      " soat, " +
      parseInt(samalyot_min) +
      " minutda yetib borar ekansiz!"
  );
} else {
    alert("Iltimos ulov nomini to'g'ri yozing!")
}
