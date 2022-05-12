const img = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

const cover = document.querySelector(".cover");

function getImg() {
  shakeArr(img);
  for (let i = 0; i < img.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.style.background = `url('../image/${img[i]}')`;
    card.style.backgroundSize = "cover";
    card.style.transform = `rotate(${getRandom(
      -12,
      12
    )}deg) translate(${getRandom(-30, 30)}px)`;
    cover.append(card);
  }
}
getImg();

function getRandom(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

function shakeArr(arr) {
  arr.sort(() => Math.random() - 0.5);
}

cover.addEventListener("click", (event) => {
  event.target.classList.add("swipe");
});
