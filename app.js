

let UserScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScore_span = document.querySelector("#user-score");
const compScore_span = document.querySelector("#comp-score");

const genCompChoice =() => {
    const options = ['stone', 'paper', 'scissors'];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const draw = () => {
    document.querySelector("#msg").innerText = "It's a draw!";

}

const winner = (userWin,userChoice,compChoice) => {
    document.querySelector("#msg").innerText = userWin ? `You win! ${userChoice} beats ${compChoice} ` : `You Lost:( ${compChoice} beats ${userChoice}`;

    if(userWin){
        UserScore++;
        userScore_span.innerText = "User Score: " + UserScore;
        userScore_span.style.fontWeight = "bold";
        document.querySelector(".msg-container").style.backgroundColor = "lightgreen";
        
    }
    else{
        compScore++;
        compScore_span.innerText = "Computer Score: " + compScore;
        compScore_span.style.fontWeight = "bold";
        document.querySelector(".msg-container").style.backgroundColor = "lightcoral";

    }
}

const game = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("User Choice: " + userChoice);
    console.log("Computer Choice: " + compChoice);

    if(userChoice === compChoice){
        draw();
        return;
    }

    let userWin = true;

    if(userChoice === 'stone' ){
        userWin = compChoice === 'scissors' ? true : false;
    }
    else if( userChoice === 'paper'){
        userWin = compChoice === 'stone' ? true : false;
    }
    else{
        userWin = compChoice === 'paper' ? true : false;
    }

    winner(userWin,userChoice,compChoice);

}

choices.forEach( choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        game(userChoice);
    })
})