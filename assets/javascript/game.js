

    var reminderGuesses = 12;
    var letterAlreadyUsed =[];
    //this is a counter that keeps adding points as the user guess correctly
    var Wins = 0 ;
    //Define when the game is over
    var done = false ;
    //ask user to chose another key
    var again = true ;

    // The current word is generated from a list 
    var possibleWords = ['madona', 'kesha', 'Taylor', 'Brithney'];

    // Make a for loop through the possibleWords array and define that as the chosenWord
    var chosenWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];

    console.log(chosenWord);

    //Determine the lenght of the chosen word and display this as dash lines in the html
    var lengthWord = chosenWord.length;

    //Define a new variable with the same amount of letters as the guessWord with dashes instead of letters
    var disGuessWord = new Array(lengthWord).fill("-");
    //Split the w
    var nletter = [];

    for (var i = 0; i < lengthWord; i++) {
    nletter.push(chosenWord.charAt(i));

    };


    //User press a key
   document.addEventListener('keyup', function(event){

   var keyPress = event.keyCode;

    
    //unless the key is a letter, the code will not run
    if(!(keyPress >= 65 && keyPress <= 120) && (keyPress != 32 && keyPress != 0)) { 
                event.preventDefault(); 
                alert("Press an letter key");
                
    }

    else {

      var userGuess = String.fromCharCode(keyPress).toLowerCase(); 
      console.log(userGuess);
            // allow letters and whitespaces only.
      letterAlreadyUsed.push(userGuess)  ;

      //If the userGuess key is within the array of characters of the chosenWord, add a winning point
      var indx = nletter.indexOf(userGuess);
           //if the letter matches one of the letter in the word chosen reandomly, indx is positive
            if (indx > 0){
              //add a point in winning
              Wins ++ ;

              //check which position in the disGuessWord the letter matches

              for (var i = 0; i < lengthWord; i++) {
              
              var indxLett = chosenWord.indexOf([i],userGuess);

              

              //If there is a match, replace the dash with the index of the userGuess that matches a letter in the random word chosen
              //the computer

              if (indxLett > 0){

              disGuessWord.replace(indxLett,userGuess);
              }

              }
              //display that in html


            
            }

          //if the userGuess key is not within the array of characters, remove one point from reminderGuesses
            else {
                  reminderGuesses --;

                //if the number of guess words is zero, stop the game

                  if (reminderGuesses == 0) {
                    alert("You loose!")
                    return;
                  }

            }

            //placing the html inot the game ID
            document.getElementById('wins').innerHTML = Wins;
            document.getElementById('letter').innerHTML = disGuessWord;
            document.getElementById('guessRmd').innerHTML = reminderGuesses;
            document.getElementById('letGuess').innerHTML = letterAlreadyUsed;

     };
})
