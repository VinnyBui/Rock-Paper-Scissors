const option = ["rock", "paper", "scissors"]; 
function computerPlay(){ 
  return option[Math.floor(Math.random()*option.length)] 
}; 
function playerSelect() {
  const prompt = require('prompt-sync')();
  const answer = prompt('Rock paper or scissor?');
  return answer;
}
const playerSelection = playerSelect();
const computerSelection = computerPlay();
function playRound(playerSelection, computerSelection) { 
  if(playerSelection == computerSelection){ 
    return ("tied game"); 
  } else if
  ((computerSelection == "rock" && playerSelection == "scissors") || 
    (computerSelection == "scissors" && playerSelection == "paper") || 
    (computerSelection == "paper" && playerSelection == "rock")){ 
    return ("You lost"); 
  }else if 
  ((playerSelection == "rock" && computerSelection == "scissors") || 
  (playerSelection == "scissors" && computerSelection == "paper") || 
  (playerSelection == "paper" && computerSelection == "rock") ){
    return ("You won");
  } 
}; 

console.log(playRound(playerSelection, computerSelection))