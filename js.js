let rockBtn = document.getElementById("rock-btn");
let paperBtn = document.getElementById("paper-btn");
let scissorsBtn = document.getElementById("scissors-btn");
let min = 1;
let max = 3;
let playerAttack;
let enemyAttack;
let textElement = document.getElementById("text-element");
// let enemyAttack = Math.floor(Math.random() * (max - min +1)) + min;


rockBtn.addEventListener('click', rockAttack);
paperBtn.addEventListener('click', paperAttack);
scissorsBtn.addEventListener('click', scissorsAttack);

function rockAttack() {
    playerAttack = 1;
    // alert(playerAttack)
    randomChoice()
    battle()
}

function paperAttack() {
    playerAttack = 2;
    // alert(playerAttack)
    randomChoice()
    battle()
}

function scissorsAttack() {
    playerAttack = 3;
    // alert(playerAttack)
    randomChoice()
    battle()
}

function randomChoice() {
    enemyAttack = Math.floor(Math.random() * (max - min + min)) + min;
}

function battle() {
    if (playerAttack == 1 && enemyAttack == 2 || playerAttack == 2 && enemyAttack == 3 || playerAttack == 3 && enemyAttack == 1) {
        textElement.innerText = 'perdiste';
    }
    else if (playerAttack == 1 && enemyAttack == 3 || playerAttack == 2 && enemyAttack == 1 || playerAttack == 3 && enemyAttack == 2) {
        textElement.innerText = 'ganaste';
    }
    else if(playerAttack == enemyAttack){
        textElement.innerHTML = 'empate'
    }
}
