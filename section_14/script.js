console.log("Hello first file");
let rand = Math.random()
let total = 1+ 3;
console.log("good bye");
if (rand < 0.5){
    console.log("number less than  0.5");
    console.log(rand);
}
else if(rand = 0.5){
    console.log("number is  0.5");
    console.log(rand);
}
else{
    console.log("number greater than  0.5");
    console.log(rand);
}
const userInput = prompt("enter").toLowerCase();
if (userInput === "hi"){
    console.log("hi there");
}
const pw = prompt("enter").toLowerCase();
// if (pw.length() >= 6){
//         if (pw.indexOf(' ') === -1){
//             console.log("valid");
//         }
//         else{
//             console.log("can not contain space");
//         }
// }
// else{
//     console.log("pw so short");
// }
if (pw.length() >= 6 && pw.indexOf(' ') === -1){
    console.log("valid");
    }
else{
    console.log("not valid");
    }

// or || , not ! 
const day = prompt('enter day int');
switch (day) {
    case 0:
        console.log("monday");
        break;
    case 1:
        console.log("tuesday");
        break;
    case 5:
    case 6:
        console.log("weekend");
    default:
        console.log("other");
        break;
}