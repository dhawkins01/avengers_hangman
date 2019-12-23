// words array of possible choices
var words = ["iron man", "spider man", "hulk", "captain america", "thanos", "thor", "loki", "clint barton", "hawkeye", "black widow",
"bucky barnes", "nick fury", "black panther", "vision", "starlord", "doctor strange", "falcon", "groot", "ant man", "rocket", "wasp",
"tony stark", "peter parker", "steve rogers", "winter soldier"];

var lettersGuessed = ["a", "b","t"];

// starting variables
var wins = 0;
var guessesRemaining = 20;

var randomWord = words[Math.floor(Math.random() * words.length)];
var winningWord = document.querySelector("#winningWord");
var lettersRemaining = document.querySelector("#lettersRemaining");
var winCount = document.querySelector("#wins");
var guessedLetters = document.querySelector("#lettersGuessed");

lettersRemaining.textContent = guessesRemaining;
winCount.textContent = wins;
guessedLetters.textContent = lettersGuessed;




// display word on the screen represented by underscores
displayWord();



// function declaration

function displayWord(){
    
    for(var i = 0; i < randomWord.length; i++){
        if(randomWord[i] === " ") {
            winningWord.innerHTML += "&nbsp";
        } else {
            winningWord.textContent += "_ "
        }
    }
}

document.onkeyup = function(event){
    var userGuess = event.key;
    console.log(userGuess);
    guessesRemaining--;
    lettersRemaining.textContent = guessesRemaining;


}