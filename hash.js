var player, winner = null;
var selectedPlayer = document.getElementById('selectedPlayer');
var selectedWinner = document.getElementById('selectedWinner');

function changePlayer(currentPlayer) {
    player = currentPlayer;
    selectedPlayer.innerHTML = player;
}