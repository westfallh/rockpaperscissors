let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); 
    return computerChoice;
    //0 = rock, 1 = paper, 2 = scissors
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {

    if (computerChoice == 0 && humanChoice == "paper"){
        console.log("Computer chose rock, you won this round.");
        humanScore++;
    }
    else if (computerChoice == 0 && humanChoice =="scissors"){
        console.log("Computer chose rock, you lose this round.");
        computerScore++;
    }
    else if (computerChoice == 1 && humanChoice =="rock"){
        console.log("Computer chose paper, you lose this round.");
        computerScore++;
    }
    else if (computerChoice == 1 && humanChoice =="scissors"){
        console.log("Computer chose paper, you win this round.");
        humanScore++;
    }
    else if (computerChoice == 2 && humanChoice =="rock"){
        console.log("Computer chose scissors, you win this round.");
        humanScore++;
    }
    else if (computerChoice == 2 && humanChoice =="paper"){
        console.log("Computer chose scissors, you lose this round.");
        computerScore++;
    }
    else {
        console.log("You tied.");
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else {
        console.log("You lose.");
    }
}

playGame();