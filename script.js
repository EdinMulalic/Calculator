const userInput=document.getElementById("userInput");
var expresion='';

function press(num){
    expresion+=num;
    userInput.value=expresion;
}
function equal(){
    userInput.value=eval(expresion);

    expresion='';

}

function erase(){
    expresion='';
    userInput.value=expresion;
}