/* function play(){
    // Step-1: Hide the home screen. to hide the screen add the class hidden to the home section
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    // console.log(homeSection.classList);

    // Show the playground.
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');

} */

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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

function getARandomAlphabet(){
    // Get or create an alphabet array.
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    const index = Math.floor(Math.random()*26);
    // console.log(index)

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;

}
getARandomAlphabet()