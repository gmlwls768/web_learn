const p1 ={
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
    name: "player one"
}
const p2 ={
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
    name: "player two"
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
const gameHistory = document.querySelector("#gameHistory");

let winningScore = 3;
let isGameOver = false;
let scoreCount = 1;
function updateScore(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score >= winningScore && player.score >= opponent.score + 2){
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled =true;
            opponent.button.disabled =true;

            gameHistory.textContent += `${scoreCount}:: ${player.name} win!!!\n`
            scoreCount += 1;
        }
        player.display.textContent = player.score;}
    }
function reset(){
    isGameOver = false;
    for (let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

p1.button.addEventListener('click', () => (updateScore(p1,p2)) )
p2.button.addEventListener('click', () => (updateScore(p2,p1)) )


resetButton.addEventListener('click',reset)

winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})
