let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let userScore = document.getElementById("userScore"); 
let computerScore = document.getElementById("computerScore");
let userChoice = document.getElementById("userChoice");
let array = [rock.id, paper.id, scissors.id];
let elements = document.getElementsByClassName('hide');
let numberUser = userScore.innerHTML;
let numberComputer = computerScore.innerHTML;

function computerPlay() {
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
}

function userPlay(id) {
    if (id == rock.id) {
        return rock.id;
    }
    else if(id == paper.id) {
       return paper.id;
    }
    else if(id == scissors.id) {
        return scissors.id; 
    }
}


function playRound(userPlay, computerPlay) {

    function scoreAnimation(id) {
     //   id.setAttribute("class", `animation`);

    }

    function computerWinFormula() {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. Computer Won`);
        document.getElementsByClassName(`computer${computerPlay}`)[0].style.display='flex';
        userChoice.setAttribute("id", `${userPlay}`);
        userChoice.setAttribute("class", `userChoiceStyle ${userPlay}-sizer item`);     
        numberComputer++;
        computerScore.innerHTML = numberComputer;
        computerScore.addEventListener(computerPlay, scoreAnimation(computerScore), false);
        document.getElementById("computerScore").animate([
            // keyframes
            { transform: 'scale(1.5)' },
            { transform: 'scale(1)' }
          ], {
            // timing options
            duration: 700,
          });
          document.getElementById(`comp${computerPlay}`).animate([
            // keyframes
            { transform: 'scale(1.5)' },
            { transform: 'scale(1)' }
          ], {
            // timing options
            duration: 700,
          });
    }

    function userWinFormula() {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. You've Won`);
        document.getElementsByClassName(`computer${computerPlay}`)[0].style.display='flex';
        userChoice.setAttribute("id", `${userPlay}`);
        userChoice.setAttribute("class", `userChoiceStyle ${userPlay}-sizer item`); 
        numberUser++;
        userScore.innerHTML = numberUser;
        userScore.addEventListener(playRound, scoreAnimation(userScore), false);
        document.getElementById("userScore").animate([
            // keyframes
            { transform: 'scale(1.5)' },
            { transform: 'scale(1)' }
          ], {
            // timing options
            duration: 700,
          });
          document.getElementById(`comp${computerPlay}`).animate([
            // keyframes
            { transform: 'scale(1.5)' },
            { transform: 'scale(1)' }
          ], {
            // timing options
            duration: 700,
          });

    }



    for(var i=0; i < elements.length; i++) {  
        document.getElementsByClassName("hide")[i].style.display = 'none';    
    }

    if(userPlay == "rock" && computerPlay =="paper") {
        computerWinFormula();
    }
    else if(userPlay == "rock" && computerPlay =="scissors") {
        userWinFormula();
    }
    else if(userPlay == "paper" && computerPlay =="scissors") {
        computerWinFormula();
    }
    else if(userPlay == "paper" && computerPlay =="rock") {
        userWinFormula();
    }
    else if(userPlay == "scissors" && computerPlay =="paper") {
        userWinFormula();
    }
    else if(userPlay == "scissors" && computerPlay =="rock") {
        computerWinFormula();
    }
    else {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. It's a tie`);
        document.getElementsByClassName(`computer${userPlay}`)[0].style.display='flex';
        userChoice.setAttribute("id", `${userPlay}`);
        userChoice.setAttribute("class", `userChoiceStyle ${userPlay}-sizer item`);
        document.getElementById(`comp${computerPlay}`).animate([
            // keyframes
            { transform: 'scale(1.5)' },
            { transform: 'scale(1)' }
          ], {
            // timing options
            duration: 700,
          });
    }
}