player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score =0;
player2_score =0;

document.getElementsById("player1_name").innerHTML=player1_name+":";
document.getElementsById("player2_name").innerHTML=player2_name+":";

document.getElementsById("player1_score").innerHTML=player1_score;
document.getElementsById("player2_score").innerHTML=player2_score;

document.getElementsById("player_question").innerHTML="question turn-"+player1_name;
document.getElementsById("player_awnser").innerHTML="awnser turn-"+player2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_awnser=parseInt(number1) * parseInt(number2);

    question_number="<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button clss='btn btn-info' onclick='check()'>Check</button>";
    row = question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

    
}



