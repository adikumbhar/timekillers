
// Declare variables
let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get HTML elements
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Event Listener for button click
submit.addEventListener("click", checkGuess);



function disable()
{   
    submit.disabled =true;
        if((guess.value <=100  && guess.value >=1 ))
            {
                submit.disabled =false;
            }
           
}

// Function to check the guess
function checkGuess() {
  const userValue = Number(guess.value);
  attempts++;

  // Using Conditionals
  if (userValue === randomNum) {
    hint.textContent = "Congratulations, you guessed it!";
  } else if (userValue < randomNum) {
    hint.textContent = "THINK_HIGHER.";
    guess.value="";
  } else {
    hint.textContent = " THINK_LOWER.";
    guess.value="";
  }

  // Display the number of attempts

   disable()
  attemptsText.textContent = "Attempts: " + attempts;
}



