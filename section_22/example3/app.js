const btn = document.querySelector('button');
const hone = document.querySelector('h1');
btn.addEventListener('click', () => {
    const newColor = makeRandomColor();
    hone.innerText = newColor;
    document.body.style.backgroundColor = newColor;
})

const makeRandomColor = () => {
    let R = Math.floor(Math.random()*255);
    let G = Math.floor(Math.random()*255);
    let B = Math.floor(Math.random()*255);
    if ((R + G + B)<=100){
        hone.style.color = "white";
    }

    return `rgb(${R},${G},${B})`;
}