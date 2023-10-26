let dollor = +prompt("Dollor kursini kiriting: ");
let yevro = +prompt("Yevro kursini kiriting: ");
let mablag = +prompt("Sayohat uchun jamg'armangizni kiriting(so'mda): ");
let ticket = 350;
let living = 500;
let picnic = 300;
if ((ticket*dollor)+(living*dollor)+(picnic*yevro) <= mablag) {
    alert("Sizning jamg'armangiz sayohat uchun bemalol yetadi. Gazini bosing!")
} else {
    alert("Sayohat uchun yana bir oz yetmayapti. Lekin kredit yoki qarz olmang!")
}
