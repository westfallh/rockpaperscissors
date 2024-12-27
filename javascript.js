const humanScore = 0;
const computerScore = 0;
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); 
    return computerChoice;
    //0 = rock, 1 = paper, 2 = scissors
}

function getHumanChoice() {
    let = humanChoice = prompt("Rock, Paper, Scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice == 0 && userChoice == "paper"){
        console.log("Computer chose rock, you won this round.");
        humanScore++;
    }
    else if (computerChoice == 0 && userChoice =="scissors"){
        console.log("Computer chose rock, you lose this round.");
        computerScore++;
    }
    else if (computerChoice == 1 && userChoice =="rock"){
        console.log("Computer chose paper, you lose this round.");
        computerScore++;
    }
    else if (computerChoice == 1 && userChoice =="scissors"){
        console.log("Computer chose paper, you win this round.");
        humanScore++;
    }
    else if (computerChoice == 2 && userChoice =="rock"){
        console.log("Computer chose scissors, you win this round.");
        humanScore++;
    }
    else if (computerChoice == 2 && userChoice =="paper"){
        console.log("Computer chose scissors, you lose this round.");
        computerScore++;
    }
    else {
        console.log("A tie.")
    }
}
