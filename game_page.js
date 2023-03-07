player1=localStorage.getItem("namePlayer1");
player2=localStorage.getItem("namePlayer2");
player1s=0;
player2s=0;
document.getElementById("player1_name").innerHTML=player1+": ";
document.getElementById("player2_name").innerHTML=player2+": ";
document.getElementById("player1_score").innerHTML=player1s;
document.getElementById("player2_score").innerHTML=player2s;
document.getElementById("player_question").innerHTML="Turno da pergunta- "+player1;
document.getElementById("player_answer").innerHTML="Turno da resposta- "+player2;
function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lowerCase="+word);
    charAt1=word.charAt(1);
    console.log(charAt1);
    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);
    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);
    remove_charAt1=word.replace(charAt1, "_");
    remove_charAt2=remove_charAt1.replace(charAt2, "_");
    remove_charAt3=remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);
    question_word="<h4 id='word_display'> Palavra: "+remove_charAt3+"</h4>";
    input_box="<br>Resposta:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='b' onclick='check()'>Checar</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
answerTurn="player2";
questionTurn="player1";
function check() {
    getAnswer=document.getElementById("input_check_box").value;
    answer=getAnswer.toLowerCase();
    console.log("Resposta em caixa baixa- "+answer);
    if(answer==word) {
        if(answerTurn=="player1") {
            player1s=player1s+1;
            document.getElementById("player1_score").innerHTML=player1s;
        }
        else {
            player2s=player2s+1;
            document.getElementById("player2_score").innerHTML=player2s;
        }
    }
    if(questionTurn=="player1") {
        questionTurn="player2";
        document.getElementById("player_question").innerHTML="Turno de Pergunta: "+player2;
    }
    else {
        questionTurn="player1";
        document.getElementById("player_question").innerHTML="Turno de Pergunta: "+player1;
    }
    if(answerTurn="player1") {
        answerTurn="player2";
        document.getElementById("player_answer").innerHTML="Turno de Resposta: "+player2;
    }
    else {
        answerTurn="player1";
        document.getElementById("player_answer").innerHTML="Turno de Resposta: "+player1;
    }
    document.getElementById("output").innerHTML="";
}