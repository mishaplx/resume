const foto = document.querySelector('.foto');
const fotomedia = document.querySelector('.foto__phone');
let width = window.innerWidth;
if (width <= 750){
foto.style.display = 'none';
fotomedia.style.display = 'block';
}

console.log(width)