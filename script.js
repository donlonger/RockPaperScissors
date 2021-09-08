let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let userScore = document.getElementById("userScore"); 
let computerScore = document.getElementById("computerScore");
let tieScore = document.getElementById("tieScore");
let userChoice = document.getElementById("userChoice");
let array = [rock.id, paper.id, scissors.id];
let elements = document.getElementsByClassName('hide');
let numberTies = tieScore.innerHTML;
let output = document.getElementById('output-message');
let history = document.getElementById('history');
let roundCounter = document.getElementById('roundsCounter');
let delay = 1600;

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

function animation(id) {
  let animation;

  if(id == `userChoiceStyle`) {
    animation = document.getElementsByClassName(`userChoiceStyle`)[0].animate([
      // keyframes
      { background: 'none' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' },
      { background: 'url(img/rock.png)' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' },
      { background: 'url(img/rock.png)' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' },
      { background: 'url(img/rock.png)' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' }
    ], {
      // timing options
      duration: 1700,
    });
  }
  else {
    animation = document.getElementById(`comp${id}`).animate([
      // keyframes
      { background: 'none' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' },
      { background: 'url(img/rock.png)' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' },
      { background: 'url(img/rock.png)' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' },
      { background: 'url(img/rock.png)' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' }
    ], {
      // timing options
      duration: 1700,
    });
  }
  return animation;
}

function playRound(userPlay, computerPlay) {

    output.innerHTML = "Who's gonna win?";
    rock.style.pointerEvents = 'none';
    paper.style.pointerEvents = 'none';
    scissors.style.pointerEvents = 'none';
    roundCounter.innerHTML++; 

    function computerWinFormula() {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. Computer Won`);
        document.getElementsByClassName(`computer${computerPlay}`)[0].style.display='flex';
        userChoice.setAttribute("id", `${userPlay}`);
        userChoice.setAttribute("class", `userChoiceStyle ${userPlay}-sizer item`);
        setTimeout(function () {
          computerScore.innerHTML++;
          output.innerHTML = `Bad luck! Computer Won`;
          $('#history').prepend('<p>L</p>');
          $('#history p:first-child').css('color', 'red'); 
          rock.style.pointerEvents = 'auto';
          paper.style.pointerEvents = 'auto';
          scissors.style.pointerEvents = 'auto';
        }, delay);
        computerScore.animate([
            // keyframes
            { transform: 'scale(1.5)' },
            { transform: 'scale(1)' }
          ], {
            // timing options
            duration: 700,
            delay: 1600,
          });
        animation(computerPlay);
        animation('userChoiceStyle');
    }

    function userWinFormula() {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. You've Won`);
        document.getElementsByClassName(`computer${computerPlay}`)[0].style.display='flex';
        userChoice.setAttribute("id", `${userPlay}`);
        userChoice.setAttribute("class", `userChoiceStyle ${userPlay}-sizer item`); 
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        setTimeout(function () {
          userScore.innerHTML++;
          output.innerHTML = `You've Won!`;
          $('#history').prepend('<p>W</p>');
          $('#history p:first-child').css('color', '#40eb34');
          rock.style.pointerEvents = 'auto';
          paper.style.pointerEvents = 'auto';
          scissors.style.pointerEvents = 'auto';
        }, delay);
        userScore.animate([
            // keyframes
            { transform: 'scale(1.5)' },
            { transform: 'scale(1)' }
          ], {
            // timing options
            duration: 700,
            delay: 1600,
          });
          animation(computerPlay);
          animation('userChoiceStyle');
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
        animation(computerPlay);
        animation('userChoiceStyle');
        tieScore.animate([
          // keyframes
          { transform: 'scale(1.5)' },
          { transform: 'scale(1)' }
        ], {
          // timing options
          duration: 700,
          delay: 1600,
        });
        setTimeout(function () {
          tieScore.innerHTML++;
          output.innerHTML = `It's a tie!`;
          $('#history').prepend('<p>T</p>');
          rock.style.pointerEvents = 'auto';
          paper.style.pointerEvents = 'auto';
          scissors.style.pointerEvents = 'auto';
        }, delay);
    }
}