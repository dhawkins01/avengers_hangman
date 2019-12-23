// words array of possible choices
var words = ["iron man", "spider man", "hulk", "captain america", "thanos", "thor", "loki", "clint barton", "hawkeye", "black widow",
"bucky barnes", "nick fury", "black panther", "vision", "starlord", "doctor strange", "falcon", "groot", "ant man", "rocket", "wasp",
"tony stark", "peter parker", "steve rogers", "winter soldier"];

var lettersGuessed = [];

// starting variables
var wins = 0;
var guessesRemaining = 20;

var randomWord = words[Math.floor(Math.random() * words.length)];
var winningWord = document.querySelector("#winningWord");


// display word on the screen represented by underscores
displayWord();
// main game loop
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