var player, winner = null;
var selectedPlayer = document.getElementById('selectedPlayer');
var selectedWinner = document.getElementById('selectedWinner');

//Start first player symbol as X
changePlayer('X');

//Get and change square box 
function getSquare(id){
    //Check if there is a winner.
    if (winner !== null) {
        return;
    }

    var squareBox = document.getElementById(id);
    //Check if square text is empty symbol ("-")
    if (squareBox.innerHTML !== '-') {
        return;
    }

    //Set player symbol  and change square background color
    squareBox.innerHTML = player;
    squareBox.style.color = '#000';
    
    //Check player by symbol
    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    //Change player if there is no winner yet
    changePlayer(player);
    checkWinner();
}

//Restart game
function restartGame()
{
    winner = null;
    selectedWinner.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var square = document.getElementById(i);
        square.style.background = '#eee';
        square.style.color = '#eee';
        square.innerHTML = '-';
    }

    changePlayer('X');
}



//Get current player value and add it to Player variable
function changePlayer(value) {
    player = value;
    selectedPlayer.innerHTML = player;
}

//Check if there is a winner veryfing if a sequence of three symbols are equal
function checkWinner(){
    //Get square element by id
    var squarebox1 = document.getElementById(1);
    var squarebox2 = document.getElementById(2);
    var squarebox3 = document.getElementById(3);
    var squarebox4 = document.getElementById(4);
    var squarebox5 = document.getElementById(5);
    var squarebox6 = document.getElementById(6);
    var squarebox7 = document.getElementById(7);
    var squarebox8 = document.getElementById(8);
    var squarebox9 = document.getElementById(9);

    if (changeSequence(squarebox1, squarebox2, squarebox3)) {
        changeSquareColor(squarebox1, squarebox2, squarebox3);
        changeWinner(squarebox1);
        return;
    }

    if (changeSequence(squarebox4, squarebox5, squarebox6)) {
        changeSquareColor(squarebox4, squarebox5, squarebox6);
        changeWinner(squarebox4);
        return;
    }

    if (changeSequence(squarebox7, squarebox8, squarebox9)) {
        changeSquareColor(squarebox7, squarebox8, squarebox9);
        changeWinner(squarebox7);
        return;
    }

    if (changeSequence(squarebox1, squarebox4, squarebox7)) {
        changeSquareColor(squarebox1, squarebox4, squarebox7);
        changeWinner(squarebox1);
        return;
    }

    if (changeSequence(squarebox2, squarebox5, squarebox8)) {
        changeSquareColor(squarebox2, squarebox5, squarebox8);
        changeWinner(squarebox2);
        return;
    }

    if (changeSequence(squarebox3, squarebox6, squarebox9)) {
        changeSquareColor(squarebox3, squarebox6, squarebox9);
        changeWinner(squarebox3);
        return;
    }

    if (changeSequence(squarebox1, squarebox5, squarebox9)) {
        changeSquareColor(squarebox1, squarebox5, squarebox9);
        changeWinner(squarebox1);
        return;
    }

    if (changeSequence(squarebox3, squarebox5, squarebox7)) {
        changeSquareColor(squarebox3, squarebox5, squarebox7);
        changeWinner(squarebox3);
    }
}




//Change Winner
function changeWinner(square) {
    winner = square.innerHTML;
    selectedWinner.innerHTML = winner;
    /*Activate restart button
    document.getElementById('Restart').style.display = "visible";*/
}

function changeSquareColor(squarebox1, squarebox2, squarebox3) {
    squarebox1.style.background = '#0f0';
    squarebox2.style.background = '#0f0';
    squarebox3.style.background = '#0f0';
}

function changeSequence(squarebox1, squarebox2, squarebox3) {
    var isEqual = false;

    if (squarebox1.innerHTML !== '-' && squarebox1.innerHTML === squarebox2.innerHTML && squarebox2.innerHTML === squarebox3.innerHTML) {
        isEqual = true;
    }

    return isEqual;
}