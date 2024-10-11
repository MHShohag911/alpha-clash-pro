/* function play(){
    // Step-1: Hide the home screen. to hide the screen add the class hidden to the home section
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    // console.log(homeSection.classList);

    // Show the playground.
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');

} */

function handleKeyboardButtonUp(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // Stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }
    
    // Get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // Check Match or Not
    if(playerPressed === expectedAlphabet){
        /* // Update Score: 
        // 1. Get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        
        // 2. Increase the score by 1
        const newScore = currentScore + 1;
        // 3. Show the updated score
        currentScoreElement.innerText = newScore;
        // Start a new round.
        removeBackgroundColorById(expectedAlphabet);
        continueGame() */

        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }else{

        /* // console.log('You Missed You Lost a Life');
        // Step-1: Get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // Step-2: Reduce the life count
        const newLife = currentLife - 1;

        // Step-3: Display the updated life count
        currentLifeElement.innerText = newLife; */

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
    }
}

// Capture Keyboard Key Press
document.addEventListener('keyup', handleKeyboardButtonUp);

function continueGame(){
    // Step-1: Generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);


    // Set Randomly Generated Alphabet to the Display
    const currentAlphabetElement  = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // Set Background Color
    setBackgroundColorById(alphabet);
}

function play(){
    // Hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    
    // Reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // Update final score
    // 1. Get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // 2. Clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}