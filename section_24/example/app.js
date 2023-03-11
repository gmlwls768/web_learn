// const req = new XMLHttpRequest();
// req.onload = function(){
//     console.log("IT LOADED!!");
//     const data = JSON.parse(this.responseText);
//     console.log(data.name, data.height)
// }
// req.onerror = function(){
//     console.log("err!!");
//     console.log(this);
// }
// req.open("GET","https://swapi.dev/api/people/1");
// req.send();

// fetch("https://swapi.dev/api/people/1")
// .then(res =>{
//     console.log("resolved!", res);
//     return res.json(); //optional
// })
// .then(data => {
//     console.log(data)})
// .catch(e =>{
//     console.log("err", e);
// })

// const loadStarWarsPeople = async()=>{
//     try{
//     const res = await fetch("https://swapi.dev/api/people/1");
//     const data = await res.json();
//     console.log(data)
// }   catch (e){
//     console.log("ERR", e)
// }
// }
// loadStarWarsPeople()

// axios.get("https://swapi.dev/api/people/1")
// .then(res => {
//     console.log("response", res);
// })
// .catch(e=>{
//     console.log("err",e);
// })

// const getStarWarsPerson = async (id) =>{
//     try{
//     const res = axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
// }   catch(e){
//     console.log('err',e);
// }
// }
// getStarWarsPerson(1)
// getStarWarsPerson(2)

const jokes = document.querySelector('#jokes'); 
const btn = document.querySelector('button')
const getDadJoke = async()=>{
    try{
        const config = {headers: {Accept:'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return "No Jokes available sry"
    }
}
const addNewJoke = async () =>{
    const jokeText = await getDadJoke();
    const newLI = document.createElement('Li');
    newLI.append(jokeText);
    jokes.append(newLI);
}
btn.addEventListener('click',addNewJoke)
