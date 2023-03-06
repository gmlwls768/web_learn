const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const rainbows = document.querySelectorAll("span");
let i = 0;
for (let ccolor of rainbows){
    ccolor.style.color = colors[i];
    i++;
}