document.addEventListener("DOMContentLoaded", () => {
    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button");

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
        console.log(`Computer chose: ${computerChoice}`);
        console.log(`You chose: ${humanChoice}`);

        if (computerChoice === humanChoice) {
            console.log("It's a tie.");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win this round!");
            humanScore++;
        } else {
            console.log("Computer wins this round!");
            computerScore++;
        }

        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);

        if (humanScore === 5 || computerScore === 5) {
            declareWinner();
        }
    }

    function declareWinner() {
        if (humanScore > computerScore) {
            console.log("Congratulations! You win the game!");
        } else {
            console.log("Computer wins the game! Better luck next time.");
        }

        // Reset scores
        humanScore = 0;
        computerScore = 0;
    }
});
