const display = document.getElementById("display");

let math_op = "";

function appendToDisplay(input) {
    if(input === '÷'){
        math_op += '/';
        display.value += input;
    }
    else if (input === '×'){
        math_op += '*';
        display.value += input;
    }
    else{
        math_op += input;
        display.value += input;
    }
}

function clearDisplay() {
    math_op = "";
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(math_op);
        math_op = display.value;
    }
    catch {
        display.value = "Error";
        math_op = "";
    }
}