const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".far");

let computerChoice = '';



//reset all selected icons:
function resetAll() {
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected')
    })
}

//random computer choice:
function randomComputerChoice() {
    const computerChoices = ['rock', 'paper', 'scissors']
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('computer choice: ', computerChoice);
}

//add computer styling and computer choice:
function displayComputerChoice() {
    switch (computerChoice) {
        case "rock":
            computerRock.classList.add("selected");
            computerChoiceEl.textContent = " ---Rock";
            break;
        case "paper":
            computerPaper.classList.add("selected");
            computerChoiceEl.textContent = " ---Paper";
            break;
        case "scissors":
            computerScissors.classList.add("selected");
            computerChoiceEl.textContent = " ---Scissors";
            break;
        default:
            break;
    }
}


//call functions to process the turn
function checkResult() {
    resetAll();
    randomComputerChoice();
    displayComputerChoice();
}


// player choice and select class:
function select(playerChoice) {
    checkResult();
    console.log('player choice: ', playerChoice)
    switch (playerChoice) {
        case "rock":
            playerRock.classList.add("selected");
            playerChoiceEl.textContent = " ---Rock";
            break;
        case "paper":
            playerPaper.classList.add("selected");
            playerChoiceEl.textContent = " ---Paper";
            break;
        case "scissors":
            playerScissors.classList.add("selected");
            playerChoiceEl.textContent = " ---Scissors";
            break;
        default:
            break;
    }
}

//computer random selection 

