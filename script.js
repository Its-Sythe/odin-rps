const rpsOptions = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    choice = Math.round((Math.random() * 2), 0);
    return rpsOptions[choice];
}

function getUserChoice () {
    choice = prompt("Rock, Paper, Scissors: ");
    confirmChoice = rpsOptions.includes(choice.toLowerCase());
    if (confirmChoice) {
        return choice.toLowerCase();
    }   else {
        alert("Unknown Option!");
    }
}

function playRound (humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock!");
            ++computerScore;
        }
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            ++humanScore;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            ++computerScore;
        }
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            ++humanScore;
        } 
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            ++computerScore;
        }
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            ++humanScore;
        }
    }
}

function playGame () {
    const humanSelection = getUserChoice();
    const computerSelection = getComputerChoice();  
    playRound(humanSelection, computerSelection);
}

for (let num = 0; num < 5; num++) {
    playGame()
}