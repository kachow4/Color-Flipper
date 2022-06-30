const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // get random number between 0 and 3
    const randomNumber = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})