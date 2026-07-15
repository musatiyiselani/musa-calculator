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

let del = "";

function deleteBtn() {
    for (let i = 0; i < math_op.length - 1; i++) {
        del += math_op[i];
    }
    math_op = del;
    display.value = math_op;
    del = "";
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