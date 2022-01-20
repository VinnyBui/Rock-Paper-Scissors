const option = ["rock", "paper", "scissor"]; 
var playerScore = 0;
var computerScore = 0;
var playerSelection = "";
var result = "";
function computerPlay(){ 
  return option[Math.floor(Math.random()*option.length)] 
}; 
const computerSelection = computerPlay();


function playRound(playerSelection, computerSelection) { 
  if(playerSelection == computerSelection){ 
    return("tied game");
  } else if
  ((computerSelection == "rock" && playerSelection == "scissor") || 
    (computerSelection == "scissor" && playerSelection == "paper") || 
    (computerSelection == "paper" && playerSelection == "rock")){
      computerScore++; 
    return("You lost"); 
  }else if 
  ((playerSelection == "rock" && computerSelection == "scissor") || 
  (playerSelection == "scissor" && computerSelection == "paper") || 
  (playerSelection == "paper" && computerSelection == "rock") ){
    playerScore++;
    return("You won");
  }
}; 

//UI
//display ai_result
const display = document.querySelector(".display");

const ai_result = document.querySelector('#ai_pick');

//buttons
const rock_btn = document.querySelector(".rock-btn");

rock_btn.addEventListener('click', () => {
  playerSelection = "rock";
  console.log(playRound(playerSelection, computerSelection));
  result = playRound(playerSelection, computerSelection);

  ai_result.textContent = result;

  display.appendChild(ai_result);
});


const paper_btn = document.querySelector(".paper-btn");

paper_btn.addEventListener('click', () => {
  playerSelection = "paper";
  console.log(playRound(playerSelection, computerSelection));
  result = playRound(playerSelection, computerSelection);

  ai_result.textContent = result;

  display.appendChild(ai_result);
});

const scissor_btn = document.querySelector(".scissor-btn");

scissor_btn.addEventListener('click', () => {
  playerSelection = "scissor";
  console.log(playRound(playerSelection, computerSelection));
  result = playRound(playerSelection, computerSelection);

  ai_result.textContent = result;

  display.appendChild(ai_result);
});


