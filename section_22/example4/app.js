// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const container = document.querySelector("#list");
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const product = form.elements.product;
    const qty = form.elements.qty;
    iiinput(product.value, qty.value);
    product.value = "";
    qty.value = "";
})

const iiinput = (product, qty) => {
    const newLi = document.createElement("li");
    newLi.innerText = qty + " " + product;
    container.appendChild(newLi);
    
}
