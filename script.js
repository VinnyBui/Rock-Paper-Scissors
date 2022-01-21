const option = ["rock", "paper", "scissor"]; 
var playerScore = 0;
var computerScore = 0;
var playerSelection = "";
var Round_winner = "";
function computerPlay(){ 
  return option[Math.floor(Math.random()*option.length)] 
}; 

function playRound(playerSelection, computerSelection) { 
  if(playerSelection == computerSelection){ 
    Round_winner = "tied game";
  } else if
  ((computerSelection == "rock" && playerSelection == "scissor") || 
    (computerSelection == "scissor" && playerSelection == "paper") || 
    (computerSelection == "paper" && playerSelection == "rock")){
    computerScore++; 
    Round_winner = "You lost";
  }else if 
  ((playerSelection == "rock" && computerSelection == "scissor") || 
  (playerSelection == "scissor" && computerSelection == "paper") || 
  (playerSelection == "paper" && computerSelection == "rock") ){
    playerScore++;
    Round_winner = "You won";
  }
}; 

//UI
const display = document.querySelector(".display_round");
const round_result = document.querySelector('#round_result');
const rock_btn = document.querySelector(".rock-btn");
const paper_btn = document.querySelector(".paper-btn");
const scissor_btn = document.querySelector(".scissor-btn");
const player_score = document.querySelector('#player_score');
const comp_score = document.querySelector('#comp_score');

//buttons
rock_btn.addEventListener('click', () => game("rock"));

paper_btn.addEventListener('click', () => game("paper"));

scissor_btn.addEventListener('click', () => game("scissor"));

function gameover(){
  return playerScore == 5 || computerScore == 5;
};

function game(playerSelection){
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  updateRound();

  if(gameover()){
    if(playerScore == 5){
      round_result.textContent = "YOU BEAT THE COMPUTER";
    }else if(computerScore == 5){
      round_result.textContent = "AI HAS WON";
    }
  }
};

function updateRound(){
  round_result.textContent = Round_winner;
  player_score.textContent = `Player: ${playerScore}`;
  comp_score.textContent = `Computer: ${computerScore}`;
};

function restart(){
  playerScore = 0;
  computerScore = 0;
  round_result.textContent = '❔';
  player_score.textContent = `Player: ${playerScore}`;
  comp_score.textContent = `Computer: ${computerScore}`
}