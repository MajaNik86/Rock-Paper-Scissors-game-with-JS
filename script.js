const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");


const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");


const allGameIcons = document.querySelectorAll(".far");

const choices = {
    rock: { name: "Rock", defeats: ["scissors"] },
    paper: { name: "Paper", defeats: ["rock"] },
    scissors: { name: "Scissors", defeats: ["paper"] },

};

let playerScoreNumber = 0;
let computerScoreNumber = 0;

let computerChoice = '';

//random computer choice
function computerRandomChoice() {
    const computerChoices = ['rock', 'paper', 'scissors']
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}


//Add selected styling and cumptore choise
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



//Reset all selected icons
function resetSelectedIcons() {
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected');
    });
}



//Reset Score  & playerChoice and computerChoice
function resetAll() {
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScoreEl.textContent = playerScoreNumber;
    computerScoreEl.textContent = computerScoreNumber;
    playerChoiceEl.textContent = '';
    computerChoiceEl.textContent = ''
    resultText.textContent = ''
    resetSelectedIcons();
}


//Check result increase result, update text
function updateScore(playerChoice) {
    if (playerChoice === computerChoice) {
        resultText.textContent = "It's a tie."
    } else {
        const choice = choices[playerChoice];
        if (choice.defeats.indexOf(computerChoice) > -1) {
            resultText.textContent = 'You Won!';
            playerScoreNumber++;
            playerScoreEl.textContent = playerScoreNumber;
        } else {
            resultText.textContent = "You lost";
            computerScoreNumber++;
            computerScoreEl.textContent = computerScoreNumber;
        }
    }
}

//call function to process the turn
function checkResult(playerChoice) {
    resetSelectedIcons();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);

}

function select(playerChoice) {
    checkResult(playerChoice);
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

//on startup set inital values
resetAll();