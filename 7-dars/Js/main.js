// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT1_2);
// console.log(Math.SQRT2);
// console.log(Math.abs(10)); absalut son-minus yoki musbat son bulsa ham musbat songa aylantirib beradi
// console.log(Math.max()); max sonni aniqlab beradi.
// console.log(Math.min()); min sonni aniqlab beradi.
// console.log(Math.pow()); darajaga oshirib beradi.
// console.log(Math.sqrt()); ildiz ostiga olib beradi


// min=10, max=100
// Ultimate formula: Math.floor(Math.random() * (Max-Min +1) + Min)

// Math.floor()  pastga yaxlitlash
// Math.ceil() tepaga yaxlitlash
// Math.round() haqiqiy yaxlitlash

//switch, case, default

let random = Math.floor(Math.random()*10 + 1);
switch (random) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9: {
        console.log("toq son chiqdi", random);
        break;
    }

    case 2: 
    case 4: 
    case 6: 
    case 8: 
    case 10: 
    {
        console.log("juft son chiqdi", random)
    }

    default: {
        console.log("boshqa son chiqdi")
    }
}
