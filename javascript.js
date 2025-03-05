document.addEventListener("DOMContentLoaded", () => {
    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button");
    const resultDisplay = document.getElementById("result");
    const scoreDisplay = document.getElementById("score");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let humanChoice = button.id.replace("Btn", "");
            playRound(getComputerChoice(), humanChoice);
        });
    });

    function getComputerChoice() {
        let choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    function playRound(computerChoice, humanChoice) {
        let result = "";

        if (computerChoice === humanChoice) {
            result = "It's a tie.";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "You win this round!";
            humanScore++;
        } else {
            result = "Computer wins this round!";
            computerScore++;
        }

        resultDisplay.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${result}`;
        scoreDisplay.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

        if (humanScore === 5 || computerScore === 5) {
            declareWinner();
        }
    }

    function declareWinner() {
        if (humanScore > computerScore) {
            resultDisplay.textContent = "Congratulations! You win the game!";
        } else {
            resultDisplay.textContent = "Computer wins the game! Better luck next time.";
        }

        // Reset scores
        humanScore = 0;
        computerScore = 0;
        scoreDisplay.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
    }
});
