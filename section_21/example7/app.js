// WRITE YOUR CODE IN HERE:

const colors = document.querySelectorAll("li");
for (let ccolor of colors){
    ccolor.classList.toggle("highlight")
}
let btn = document.createElement("button",'text');