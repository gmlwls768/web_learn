let max_num = parseInt(prompt("Welcome! Enter your max number:"))
while (!max_num){
    paseInT(prompt("Enter a valid number!"))
}
const random_num = Math.round(Math.random() * max_num + 1)
let count = 1
let guess = prompt("enter your first guess:")
while (true){
    if (random_num == parseInt(guess) || guess == "q"){
        console.log(`It took you ${count} guesses.`)
        break
    }
    else if(random_num > guess){
        guess = prompt("Too Low guess again:")
        count += 1
    }
    else if(random_num<guess){
        guess = prompt("Too High guess again:")
        count += 1
    }
    else{
        guess = prompt("check your type! again:")
        count += 1
    }
}

