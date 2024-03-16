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

    return computerPlay;
  }
  
  const rndInt = getComputerChoice(1, 3);
  console.log("Computer choice: " + rndInt);
  
let playerPoints = 0;
let computerPoints = 0;

//playround
function playRound_backend(playerPlay, computerPlay) {

    let result;

    if (playerPlay === "rock" && computerPlay === "rock" || playerPlay === "scissor" && computerPlay === "scissor" || playerPlay === "paper" && computerPlay === "paper") {
        result = ("It's a Draw! Play again");
        return result;
    }

    if ( playerPlay === "rock" && computerPlay === "scissor") {
        result = ("You Win! Rock beats Scissor");
        playerPoints+=1;
        return result;
    } else if (computerPlay === "rock" && playerPlay === "scissor") {
        result = ("You Lose! rock beats scissor");
        computerPoints+=1;
        return result;
    }
    if (playerPlay === "paper" && computerPlay === "scissor") {
        result = ("You Lose! Paper beats Scissor");
        computerPoints+=1;
        return result;
    } else if (playerPlay === "scissor" && computerPlay === "paper") {
        result = ("You Win! Paper beats Scissor");
        playerPoints+=1;
        return result;
    } 
    
    if (computerPlay === "rock" && playerPlay === "paper") {
        result = ("You Win! Paper beats Rock");
        playerPoints+=1;
        return result;
    } else if (computerPlay === "paper" && playerPlay === "rock") {
        result = ("You Lose! Paper beats Rock");
        computerPoints+=1;
        return result;
    }
    
    else if (playerPlay === "rock" && computerPlay === "paper") {
        result = ("You Lose! Paper beats Rock");
        computerPoints+=1;
        return result;
    } else if (computerPlay === "rock" && playerPlay === "paper") {
        result = ("You Win! Paper beats Rock");
        playerPoints+=1;
        return result;
    }
}

//playgame
for(let i = 0; i<5; i++){
    let playerPlay = prompt("Enter your choice of play:").toLowerCase();
    console.log("Your choice: " + playerPlay);
    const playRound = playRound_backend(playerPlay, computerPlay);
    console.log(playRound);
}

//result
if (playerPoints > computerPoints) {
    console.log("Congrats! You have won the game!");
} else {
    console.log("Oops! Computer won the game!");
}