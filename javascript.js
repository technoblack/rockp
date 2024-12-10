let humanScore = 0
let computerScore = 0


function getComputerChoice() {

let choice = Math.floor(Math.random()* 3);

switch (choice) {
case 0:
return "rock";

case 1:
return "paper";

case 2:
return "scissors";

}
}

  console.log("CPU chooses " + getComputerChoice()) 

function getHumanChoice()  {

    let humanChoice = prompt("What's your choice?").toLowerCase();
    
    switch(humanChoice) {
    case "rock":
    return "rock"
    break;

    case "paper":
    return "paper"
    break; 
    
    case "scissors":
    return "scissors"
    break;

    default: 
    return "Please enter rock, paper, or scissors"

}
 }

 //  console.log(getHumanChoice())

 function playGame() {

 function playRound(humanChoice, computerChoice){

    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      alert ("You lose! Paper beats Rock");
     } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      alert ("You win! Rock beats Scissors");
       } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      alert ("You win! Paper beats Rock");
       } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        alert ("You lose! Scissors beats Paper");
       } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        alert ("You lose! Rock beats Scissors");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        alert ("You win! Scissors beats Paper");
        } else 
        alert ("it's a tie, try again");
        }
      

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

 playRound(humanSelection, computerSelection);

 // if (humanScore === 5 ) {
 // alert ("The game is over") 
 // } 

      }

for (let i = 0; i < 5; i ++)  {
  playGame();
  
  
  if ( humanScore === 3) {
     alert ("You have won the match!") 
   } 
 else if (computerScore === 3) {
  alert ("The computer won the match!")  
}
 else (humanScore > computerScore)
alert ("You have won the match!")

}

 console.log(playGame())






