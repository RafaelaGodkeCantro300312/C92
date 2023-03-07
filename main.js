function addUser() {
    player1=document.getElementById("player1NameInput").value;
    player2=document.getElementById("player2NameInput").value;
    localStorage.setItem("namePlayer1",player1);
    localStorage.setItem("namePlayer2",player2);
    window.location="game_page.html";
}