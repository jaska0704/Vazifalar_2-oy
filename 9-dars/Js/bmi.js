// let height = prompt("Bo'yingizni o'lchami(sm): ");

function bmi(a,b) {
    let c=a*a/b;
    if (c>=18.5 || c<=24.9) {
        return "Normal";
    }else if(c>=25 || c<=29.9) {
        return "Overwieght";
    }else if(c>=30 || c<=39.9) {
        return "Obese";
    }else if(c>=40) {
        return "Morbidy Obese";
    }
}

console.log(bmi(+prompt("Bo'yinngizni kiriting(sm): "), +prompt("Vazningizni kiriting(kg): ")));
