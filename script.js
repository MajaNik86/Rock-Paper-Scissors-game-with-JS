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


//reset all selected icons:
function resetAll() {
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected')
    })
}


// player choice and select class:
function select(playerChoice) {
    resetAll();
    console.log(playerChoice)
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