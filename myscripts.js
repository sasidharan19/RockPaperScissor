// computerplay
let computerPlay;

function getComputerChoice(min, max) { // min and max included 
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    if (random === 1){
        computerPlay = "rock";
    } else if (random === 2){
        computerPlay = "paper";
    } else if (random === 3){
        computerPlay = "scissor";
    }

    console.log("Computer choice: " + computerPlay);

    return computerPlay;
  }
  
//const computerSelection = getComputerChoice(1, 3);
//console.log("Computer choice: " + computerSelection);
  
let playerPoints = 0;
let computerPoints = 0;

let result;

//playround
function playRound_backend(playerPlay, computerPlay) {

    if (playerPlay === "rock" && computerPlay === "rock" || playerPlay === "scissor" && computerPlay === "scissor" || playerPlay === "paper" && computerPlay === "paper") {
        result = "It's a Draw! Play again";
        return result;
    }

    if ( playerPlay === "rock" && computerPlay === "scissor") {
        result = "You Win! Rock beats Scissor";
        playerPoints+=1;
        return result;
    } else if (computerPlay === "rock" && playerPlay === "scissor") {
        result = "You Lose! rock beats scissor";
        computerPoints+=1;
        return result;
    }
    if (playerPlay === "paper" && computerPlay === "scissor") {
        result = "You Lose! Paper beats Scissor";
        computerPoints+=1;
        return result;
    } else if (playerPlay === "scissor" && computerPlay === "paper") {
        result = "You Win! Paper beats Scissor";
        playerPoints+=1;
        return result;
    } 
    
    if (computerPlay === "rock" && playerPlay === "paper") {
        result = "You Win! Paper beats Rock";
        playerPoints+=1;
        return result;
    } else if (computerPlay === "paper" && playerPlay === "rock") {
        result = "You Lose! Paper beats Rock";
        computerPoints+=1;
        return result;
    }
    
    else if (playerPlay === "rock" && computerPlay === "paper") {
        result = "You Lose! Paper beats Rock";
        computerPoints+=1;
        return result;
    } else if (computerPlay === "rock" && playerPlay === "paper") {
        result = "You Win! Paper beats Rock";
        playerPoints+=1;
        return result;
    }
}

//playgame
/* for(let i = 0; i<5; i++){
    let playerPlay = prompt("Enter your choice of play:").toLowerCase();
    console.log("Your choice: " + playerPlay);
    const playRound = playRound_backend(playerPlay, computerPlay);
    console.log(playRound);
} */

let displayResult = document.getElementById("displayResult");

let rock = document.getElementById("firstButton");

let finalResult = document.createElement("h1");

let rockPlay = rock.addEventListener("click", function() {
    let result = playRound_backend("rock", getComputerChoice(1, 3))
    console.log("Your choice: rock");
    console.log(result);
    console.log("Your points: " + playerPoints);
    console.log("Computer Points " + computerPoints);

    let computerChoice = document.createElement("p");
    computerChoice.textContent = ("Computer choice: " + computerPlay);
    displayResult.appendChild(computerChoice);

    let yourChoice = document.createElement("p");
    yourChoice.textContent = "Your choice: rock";
    displayResult.appendChild(yourChoice);

    let roundResult = document.createElement("h2");
    roundResult.textContent = result;
    displayResult.appendChild(roundResult);

    let yourPoints = document.createElement("p");
    yourPoints.textContent = ("Your points: " + playerPoints);
    displayResult.appendChild(yourPoints);

    let computerPointsDisplay = document.createElement("p");
    computerPointsDisplay.textContent = ("Computer Points " + computerPoints);
    displayResult.appendChild(computerPointsDisplay);

    if(playerPoints === 5) {
        finalResult.style.color = "green";
        finalResult.textContent = "Congratulations! you have won the won the game";
    } else if (computerPoints === 5) {
        finalResult.style.color = "red";
        finalResult.textContent = "Oops! computer has won the game";
    } else {
        let nextRound = document.createElement("h3");
        nextRound.textContent = ("Next Round: ");
        displayResult.appendChild(nextRound);
    }
    
    displayResult.appendChild(finalResult);
});

let paper = document.getElementById("secondButton");

let paperPlay = paper.addEventListener("click", function() {
    let result = playRound_backend("paper", getComputerChoice(1, 3))
    console.log("Your choice: paper");
    console.log(result);
    console.log("Your points: " + playerPoints);
    console.log("Computer Points " + computerPoints);

    let computerChoice = document.createElement("p");
    computerChoice.textContent = ("Computer choice: " + computerPlay);
    displayResult.appendChild(computerChoice);

    let yourChoice = document.createElement("p");
    yourChoice.textContent = "Your choice: paper";
    displayResult.appendChild(yourChoice);

    let roundResult = document.createElement("h2");
    roundResult.textContent = result;
    displayResult.appendChild(roundResult);

    let yourPoints = document.createElement("p");
    yourPoints.textContent = ("Your points: " + playerPoints);
    displayResult.appendChild(yourPoints);

    let computerPointsDisplay = document.createElement("p");
    computerPointsDisplay.textContent = ("Computer Points " + computerPoints);
    displayResult.appendChild(computerPointsDisplay);

    if(playerPoints === 5) {
        finalResult.style.color = "green";
        finalResult.textContent = "Congratulations! you have won the won the game";
    } else if (computerPoints === 5) {
        finalResult.style.color = "red";
        finalResult.textContent = "Oops! computer has won the game";
    } else {
        let nextRound = document.createElement("h3");
        nextRound.textContent = ("Next Round: ");
        displayResult.appendChild(nextRound);
    }
    
    displayResult.appendChild(finalResult);
});


let scissor = document.getElementById("thirdButton");
scissor.addEventListener("click", function() {
    let result = playRound_backend("scissor", getComputerChoice(1, 3))
    console.log("Your choice: scissor");
    console.log(result);
    console.log("Your points: " + playerPoints);
    console.log("Computer Points " + computerPoints);

    let computerChoice = document.createElement("p");
    computerChoice.textContent = ("Computer choice: " + computerPlay);
    displayResult.appendChild(computerChoice);

    let yourChoice = document.createElement("p");
    yourChoice.textContent = "Your choice: scissor";
    displayResult.appendChild(yourChoice);

    let roundResult = document.createElement("h2");
    roundResult.textContent = result;
    displayResult.appendChild(roundResult);

    let yourPoints = document.createElement("p");
    yourPoints.textContent = ("Your points: " + playerPoints);
    displayResult.appendChild(yourPoints);

    let computerPointsDisplay = document.createElement("p");
    computerPointsDisplay.textContent = ("Computer Points " + computerPoints);
    displayResult.appendChild(computerPointsDisplay);

    if(playerPoints === 5) {
        finalResult.style.color = "green";
        finalResult.textContent = "Congratulations! you have won the won the game";
    } else if (computerPoints === 5) {
        finalResult.style.color = "red";
        finalResult.textContent = "Oops! computer has won the game";
    } else {
        let nextRound = document.createElement("h3");
        nextRound.textContent = ("Next Round: ");
        displayResult.appendChild(nextRound);
    }
    
    displayResult.appendChild(finalResult);
});