// let images = [
//   "https://images.pexels.com/photos/18943978/pexels-photo-18943978/free-photo-of-2023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/18759023/pexels-photo-18759023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/18688875/pexels-photo-18688875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// ];

// let images1 = [
//   "https://images.pexels.com/photos/10777116/pexels-photo-10777116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/18503091/pexels-photo-18503091/free-photo-of-19.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/18830088/pexels-photo-18830088.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
// ];
// let images2 = [
//   "https://images.pexels.com/photos/13298593/pexels-photo-13298593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/17807336/pexels-photo-17807336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/13909946/pexels-photo-13909946.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
// ];

// let imageElem = document.querySelector(".image");
// let image1Elem = document.querySelector(".image1");
// let image2Elem = document.querySelector(".image2");

// console.log(imageElem.getAttribute("alt"));
// let i = 0;
// imageElem.setAttribute("src", images[i]);
// image1Elem.setAttribute("src", images1[i]);
// image2Elem.setAttribute("src", images2[i]);

// setInterval(() => {  //bunda rasmlarni har sekunda almashtirib turadi.
//     if (++i === images.length) {
//         i = 0;
//     }
//     imageElem.setAttribute("src", images[i]);
// }, 2000);


// setInterval(() => {  //bunda rasmlarni har sekunda almashtirib turadi.
//     if (++i === images1.length) {
//         i = 0;
//     }
//     image1Elem.setAttribute("src", images1[i]);
// }, 2000);


// // setInterval(() => {  //bunda rasmlarni har sekunda almashtirib turadi.
// //     if (++i === images2.length) {
// //         i = 0;
// //     }
// //     image2Elem.setAttribute("src", images2[i]);
// // }, 1000);

// let title = document.querySelector(".title")
// let button1 = document.querySelector(".button1")
// let button2 = document.querySelector(".button2")

// let getValue = 0;

// function getValues() {
//     title.textContent = getValue;
// }

// let button1Fun = () => {
//     getValue++;
//     getValues();
// };

// let button2Fun = () => {
//     getValue=0;
//     getValues();
// };

// button1.addEventListener("click", button1Fun);
// button2.addEventListener("click", button2Fun);
