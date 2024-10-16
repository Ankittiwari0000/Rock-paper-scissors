let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userPara=document.querySelector("#user");
const compPara=document.querySelector("#computer");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game was draw. Play again";
    msg.style.backgroundColor="blue";
}


const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userPara.innerText=userScore;
        msg.innerText=`You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compPara.innerText=compScore;
        msg.innerText=`You lose ! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        //Draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors" ? false : true;
        }
        else{
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});