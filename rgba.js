const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let rgbColor = "rgba(" + generateRange() + ', ' + generateRange() + ', ' + generateRange() + ')';

    document.body.style.backgroundColor = rgbColor;
    color.textContent = rgbColor; 
})

function generateRange(){
    return Math.floor(Math.random() * 255);
}