let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let scoreUser = 0; 
let array = [rock.id, paper.id, scissors.id];

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
    var elements = document.getElementsByClassName('hide');
    for(var i=0; i < elements.length; i++) {  
        document.getElementsByClassName("hide")[i].style.display = 'none';
    }

   // document.getElementsByClassName("hide")[0].style.display = 'none';
    if(userPlay == "rock" && computerPlay =="paper") {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. Computer Won`);
        document.getElementsByClassName('computerpaper')[0].style.display='flex';
    }
    else if(userPlay == "rock" && computerPlay =="scissors") {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. You've Won`);
        document.getElementsByClassName('computerscissors')[0].style.display='flex';
    }
    else if(userPlay == "paper" && computerPlay =="scissors") {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. Computer Won`);
        document.getElementsByClassName('computerscissors')[0].style.display='flex';
    }
    else if(userPlay == "paper" && computerPlay =="rock") {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. You've Won`);
        document.getElementsByClassName('computerrock')[0].style.display='flex';
    }
    else if(userPlay == "scissors" && computerPlay =="paper") {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. You've Won`);
        document.getElementsByClassName('computerpaper')[0].style.display='flex';
    }
    else if(userPlay == "scissors" && computerPlay =="rock") {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. Computer Won`);
        document.getElementsByClassName('computerrock')[0].style.display='flex';
    }
    else {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. It's a tie`);
        document.getElementsByClassName(`computer${userPlay}`)[0].style.display='flex';
    }
}