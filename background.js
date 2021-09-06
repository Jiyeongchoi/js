const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg"
]

const chosenImg = images[Math.floor(Math.random()*10)];

//html에 img element 생성
const bgImg = document.createElement("img");

//img src - chosenImg
bgImg.src = `img/${chosenImg}`;

//appenchild
document.body.appendChild(bgImg);

