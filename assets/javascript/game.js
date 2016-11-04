


//-------------------------------------------------------------------------------//
//Define reminderGuesses, letterAlreadyUsed variables
//User has 12 attemps to guess the word, let's define set a limit on the number of trials

//Display remiderGuesses and letterAlreadyUsed in the html. 

// When user click a letter of the keyword, store that value in a variables


//Keep track of the number of clicks
//discount the guesses from the reminderGuesses value


// Compare the user guess with any of the letters in the currentWord

//add point in Wins if it is match

//Compare key with letterAlreadyUsed

//If user click twice the same key, don't remove points from the reminderGuesses and don't add 
//new words into the letterAlreadyUsed



var reminderGuesses = 12;
var letterAlreadyUsed =[];
//this is a counter that keeps adding points as the user guess correctly
var Wins = 0 ;



// The current word is generated from a list or randomly? let's start with a words 
//define by me, then make it fancier

var possibleWords = ['madona', 'kesha', 'Taylor', 'Brithney'];


// Make a for loop through the possibleWords array and define that as the chosenWord

var chosenWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];

console.log(chosenWord);

//Determine the lenght of the chosen word and display this as dash lines in the html

var lengthWord = chosenWord.length;

 

document.addEventListener('keyup', function(event){

var keyPress = event.keyCode;

//unless is a letter, the code will not run

if(!(keyPress >= 65 && keyPress <= 120) && (keyPress != 32 && keyPress != 0)) { 
            event.preventDefault(); 
            alert("Press an letter key");


}

else {


  
var userGuess = String.fromCharCode(keyPress).toLowerCase(); 
        // allow letters and whitespaces only.


letterAlreadyUsed.push(userGuess)  ;

//Split the chosenWord into characters

var nletter = [];

for (var i = 0; i < lengthWord; i++) {

   
   nletter.push(chosenWord.charAt(i));

    // var nletter = chosenWord.charAt(i);

        // if (nletter == userGuess) {
        //     Wins ++;
        //     }

  }

//If the userGuess key is within the array of characters of the chosenWord, add a winning point
var indx = nletter.indexOf(userGuess);

if (indx > 1){
  Wins ++ ;
}

//if the userGuess key is not within the array of characters, remove one point from reminderGuesses
else {
  reminderGuesses --;
}






console.log(lengthWord);
console.log(userGuess);


  // Taking the tallies and displaying then in HTML

  var html = '<p> Press any key to get started </p>' +
  "<p> Wins: " +
  Wins + 
  "<p> lengthWord: " +
  lengthWord + 
  "</p>" +
   "<p> Number of guesses reminder: " +
  reminderGuesses + 
  "</p>" +
  "<p> Letters already chosen: " +
  letterAlreadyUsed + 
  "</p>" ;

  //placing the html inot the game ID
  document.getElementById('game').innerHTML = html;




  }
}
);
