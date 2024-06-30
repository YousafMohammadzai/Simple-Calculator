const userInput = document.getElementById("userInput");
var expressoion = '';

function press(num){
    expressoion += num;
    userInput.value = expressoion;

}

function equal(){
    userInput.value = eval(expressoion);
    expressoion = '';
}

function erase(){
    expressoion = '';
    userInput.value = expressoion;
}