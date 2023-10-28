const computerPlay = ["Rock", "Paper", "Scissors"];
let computerOutput = computerPlay[Math.floor(Math.random() * computerPlay.length)];
let scoreTie = 1;
let scoreWin = 1;
let scoreLoose = 1;


function rock() {
    const userPlay = "Rock";
    if (userPlay === computerOutput) {
        document.getElementById("gameResult").value = "It's a Tie!";
        display();
        tie();
        reset();
    } else if (computerOutput === "Paper") {
        document.getElementById("gameResult").value = "Computer Wins!";
        display();
        loose();
        reset();
    } else if (computerOutput === "Scissors") {
        document.getElementById("gameResult").value = "You Win!";
        display();
        win();
        reset();
    }
}

function paper() {
    const userPlay = "Paper";
    if (userPlay === computerOutput) {
        document.getElementById("gameResult").value = "It's a Tie!";
        display();
        tie();
        reset();
    } else if (computerOutput === "Rock") {
        document.getElementById("gameResult").value = "You Win!";
        display();
        win();
        reset();
    } else if (computerOutput === "Scissors") {
        document.getElementById("gameResult").value = "Computer Wins!";
        display();
        loose();
        reset();
    }
}

function scissors() {
    const userPlay = "Scissors";
    if (userPlay === computerOutput) {
        document.getElementById("gameResult").value = "It's a Tie!";
        display();
        tie();
        reset();
    } else if (computerOutput === "Paper") {
        document.getElementById("gameResult").value = "You Win!";
        display();
        win();
        reset();
    } else if (computerOutput === "Rock") {
        document.getElementById("gameResult").value = "Computer Wins!";
        display();
        loose();
        reset();
    }
}

function reset() {
    computerOutput = computerPlay[Math.floor(Math.random() * computerPlay.length)];
}

function display() {
    document.getElementById("display").value = "Computer Chooses: " + computerOutput;
}


function tie() {
    document.getElementById("tie").value = "Score Tie: " + scoreTie++;
}

function win() {
    document.getElementById("win").value = "Your Win: " + scoreWin++;
}

function loose() {
    document.getElementById("loose").value = "Your Loss: " + scoreLoose++;
}

function resetGame() {
    scoreTie = 1;
    scoreWin = 1;
    scoreLoose = 1;
    document.getElementById("display").value = "";
    document.getElementById("tie").value = "";
    document.getElementById("win").value = "";
    document.getElementById("loose").value = "";
    document.getElementById("gameResult").value = "";

}