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
        
    function playRound(playerSelection, computerSelection){
        if(playerSelection == "scissors" && computerSelection == "scissors"){
            return "equal"
        }
        
        if(playerSelection == "scissors" && computerSelection == "rock"){
            return "The winner is Computer!"
        }
        
        if(playerSelection == "scissors" && computerSelection == "paper"){
            return "The winner is Player!"  
        }
        
        if(playerSelection == "rock" && computerSelection == "scissors"){
            return "The winner is Player!"
        }   
        
        if(playerSelection == "rock" && computerSelection == "rock"){
            return "equal"
        }
        
        if(playerSelection == "rock" && computerSelection == "paper"){
            return `The winner is Computer!`  
        }
        
        if(playerSelection == "paper" && computerSelection == "scissors"){
            return `The winner is Computer!`  
        }
        
        if(playerSelection == "paper" && computerSelection == "rock"){
            return `The winner is Computer!`  
        }
        
        if(playerSelection == "paper" && computerSelection == "paper"){
            return "equal"  
        }
    }
    
    function game(){
        
        let res = '';
        let computer = 0;
        let player = 0;
        let nereseno = 0;
        let pobednik;

        for (let i = 0; i < 3; i++){

            const playerSelection = prompt();
            const computerSelection = getComputerChoice();
            res = playRound(playerSelection, computerSelection)
            
            if(res === `The winner is Computer!`){
                computer += 1
            }
            if(res === "The winner is Player!"){
                player += 1 
            }
            else if(res === "equal" ){
                nereseno += 1
            }
            pobednik = (computer > player) ?
            (computer > nereseno ? computer : nereseno) :
            (player > nereseno ? player : nereseno);    
        }
        
       let ispisi;
        if(pobednik == computer){
            ispisi = `The winner is Computer!`
        }
        if(pobednik == player){
            ispisi = "The winner is Player!"
        }
        if(pobednik == nereseno){
            ispisi =  "equal"
        }
        return ispisi
    }

    console.log(game())
    

  


