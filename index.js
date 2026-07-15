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



function deleteBtn() {

    let del = "";
    let N =  math_op.length - 1;

    for (let i = 0; i < N; i++) {
        del += math_op[i];
    }
    
    math_op = del;
    del = "";
    display.value = "";

    for (let i = 0; i < math_op.length; i++) {
        if(math_op[i] === '/'){
            display.value += '÷';
        }
        else if (math_op[i] === '*'){
            display.value += '×';
        }
        else{
            display.value += math_op[i];
        }} 
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