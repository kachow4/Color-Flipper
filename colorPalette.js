const hex2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function generateRandomColor() {
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex2[Math.floor(Math.random() * hex2.length)];
    }
    return hexColor;
}

const paletteBtn = document.getElementById("palette-btn");
const column1 = document.querySelector('.column1');
const column2 = document.querySelector('.column2');
const column3 = document.querySelector('.column3');
const column4 = document.querySelector('.column4');
const column5 = document.querySelector('.column5');

paletteBtn.addEventListener('click', function(){
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    const color3 = generateRandomColor();
    const color4 = generateRandomColor();
    const color5 = generateRandomColor();

    document.getElementById("color-one").style.backgroundColor = color1;
    document.getElementById("color-two").style.backgroundColor = color2;
    document.getElementById("color-three").style.backgroundColor = color3;
    document.getElementById("color-four").style.backgroundColor = color4;
    document.getElementById("color-five").style.backgroundColor = color5;

    column1.textContent = color1; 
    column2.textContent = color2; 
    column3.textContent = color3; 
    column4.textContent = color4; 
    column5.textContent = color5; 
})