const hellobtn = document.querySelector("#hello")
const goodbyebtn = document.querySelector("#goodbye")
hellobtn.addEventListener('click', () => {
    console.log("hello")
})
goodbyebtn.addEventListener('click', ()=>(
    console.log("goodbye")
))