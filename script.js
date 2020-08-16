let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*9);

const compareGuesses = (human, computer, secret) => {
  const humanGuess = Math.abs(human - secret);
  const computerGuess = Math.abs(computer - secret);

if(human > 10) {
  return alert('Number needs to be between 0 and 10')
} else if (humanGuess === computerGuess) {
  return true;
} else if (humanGuess > computerGuess) {
  return false;
} else if (humanGuess < computerGuess) {
  return true;
} 
  
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;