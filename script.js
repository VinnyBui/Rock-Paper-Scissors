const option = ["rock", "paper", "scissor"]; 
var playerScore = 0;
var computerScore = 0;
function computerPlay(){ 
  return option[Math.floor(Math.random()*option.length)] 
}; 
function playerSelect() {
  const prompt = require('prompt-sync')();
  let answer = prompt('Rock paper or scissor?');
  return answer;
};
let playerSelection = "";
const computerSelection = computerPlay();


function playRound(playerSelection, computerSelection) { 
  if(playerSelection == computerSelection){ 
    return("tied game");
  } else if
  ((computerSelection == "rock" && playerSelection == "scissor") || 
    (computerSelection == "scissor" && playerSelection == "paper") || 
    (computerSelection == "paper" && playerSelection == "rock")){ 
    return("You lost"); 
  }else if 
  ((playerSelection == "rock" && computerSelection == "scissor") || 
  (playerSelection == "scissor" && computerSelection == "paper") || 
  (playerSelection == "paper" && computerSelection == "rock") ){
    return("You won");
  }else{
    console.log("try again");
  }
}; 

//buttons
const rock_btn = document.querySelector(".rock-btn");

rock_btn.onclick = () => {
  playerSelection = "rock";
  console.log(playRound(playerSelection, computerSelection));
};

const paper_btn = document.querySelector(".paper-btn");

paper_btn.onclick = () => {
  playerSelection = "paper";
  console.log(playRound(playerSelection, computerSelection));
};

const scissor_btn = document.querySelector(".scissor-btn");

scissor_btn.onclick = () => {
  playerSelection = "scissor";
  console.log(playRound(playerSelection, computerSelection));
};




/*
function game(){
  while(true){
    const playerSelection = playerSelect();
    const computerSelection = computerPlay();
    let rounds = playRound(playerSelection, computerSelection);
    if(rounds == "You won"){
      playerScore++;
      console.log(`You won, score is ${playerScore} to ${computerScore}`);
    }else if (rounds == "You lost"){
      computerScore++;
      console.log(`You lost, score is ${playerScore} to ${computerScore}`);
    }else{
      console.log(`tied game, score is ${playerScore} to ${computerScore}`); 
    }
    if(playerScore == 5){
      return ("You beat the computer");
    }else if(computerScore == 5){
      return ("You lost to the computer");   
    }
  }
}*/