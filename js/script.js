const random = Math.floor(Math.random() * 9 + 1);
console.log(random);

const imgTag = document.querySelector("img");
imgTag.src = `images/${random}.jpg`;
