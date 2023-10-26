let cars = ["damas", "nexia", "tiko", "bmv", "mersedes-benz", "toyota", "lada"];
let car = prompt("Mashina rusumini kiriting: ");
if (cars.includes(car.toLowerCase())) {
    console.log("Sizda bu mashina allaqachon bor")
}else {
    cars.push(car);
    console.log("Mashina muaffaqiyatli qo'shildi"); 
}

console.log(cars)