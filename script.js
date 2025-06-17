let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

let guessInput = document.getElementById('guessInput');
let submitBtn = document.getElementById('submitBtn');
let resetBtn = document.getElementById('resetBtn');
let feedback = document.getElementById('feedback');
let attemptsDisplay = document.getElementById('attempts');

submitBtn.addEventListener('click',() => {
    let userGuess = parseInt(guessInput.value);
    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.innerHTML = `Please enter a valid number between 1 and 100.`;
        feedback.style.display = 'block';
        feedback.className = 'feedback error';
        return;
    }
    attempts++;
    attemptsDisplay.innerHTML = `Attempts: ${attempts}`;
    if(userGuess === randomNumber) {
        feedback.innerHTML = `Correct! The number was ${randomNumber}. You guessed it in ${attempts} attempts.`;
        feedback.style.display = 'block';
        feedback.className = 'feedback correct';
        submitBtn.style.display = 'none';
        resetBtn.style.display = 'block';
    } else if(userGuess > randomNumber) {
        feedback.innerHTML = `Too high!`;
        feedback.style.display = 'block';
        feedback.className = 'feedback high';
    } else {
        feedback.innerHTML = `Too Low!`;
        feedback.style.display = 'block';
        feedback.className = 'feedback low';
    }

    if(attempts >= 10 && userGuess !== randomNumber) {
        feedback.innerHTML = `Game over`
        feedback.className = 'feedback game-over';
        submitBtn.style.display = 'none';
        resetBtn.style.display = 'block';
    }
    guessInput.value = '';
})

resetBtn.addEventListener('click',() => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.innerHTML = `Attempts: 0`;
    feedback.style.display = 'none';
    guessInput.value = '';
    submitBtn.style.display = 'block';
    resetBtn.style.display = 'none';
})