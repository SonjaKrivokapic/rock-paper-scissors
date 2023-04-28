// isArray() method is used to check if an object is an array. The Array. isArray() method returns true if an object is an array, otherwise returns false . Note: For an array, the typeof operator returns an object.

function playRound(playerSelection, computerSelection){
    
    if(playerSelection == "scissors" && computerSelection == "scissors"){
        return "equal"
    }
    if(playerSelection == "scissors" && computerSelection == "rock"){
        return `The winner is ${computerSelection}!` 
    }
    if(playerSelection == "scissors" && computerSelection == "paper"){
        return `The winner is ${playerSelection}!`  
    }
    if(playerSelection == "rock" && computerSelection == "scissors"){
        return `The winner is ${computerSelection}!` 
    }
    if(playerSelection == "rock" && computerSelection == "rock"){
        return "equal"
    }
    if(playerSelection == "rock" && computerSelection == "paper"){
        return `The winner is ${playerSelection}!`  
    }
    if(playerSelection == "paper" && computerSelection == "scissors"){
        return `The winner is ${computerSelection}!`  
    }
    if(playerSelection == "paper" && computerSelection == "rock"){
        return `The winner is ${computerSelection}!`  
    }
    if(playerSelection == "paper" && computerSelection == "paper"){
        return "equal"  
    }
}

    function getComputerChoice(){
        let niz1 = ['rock', 'paper', 'scissors']
        let choice;
        let random = Math.floor(Math.random() * 3)
        for(let i = 0; i < niz1.length; i++){
            if(i == random){
                choice = niz1[i] 
            }    
        }
        return choice
    };


    
    console.log(playRound("rock", getComputerChoice()));




