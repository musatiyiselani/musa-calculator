const display = document.getElementById("display");

let math_op = "";

function appendToDisplay(input) {
    if(input != '.' && math_op === '0'){
        math_op = input;
        display.value = input;
    }
    else if(input === '÷'){
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


function openBracket(input) {
    if(math_op.length === 0 || '+*/-('.includes(math_op.at(-1))){
        math_op += '(';
        display.value += input;
    }
    else {
        math_op += '*(';
        display.value += input;
    }
}



function clearDisplay() {
    math_op = "";
    display.value = "";
}



function deleteBtn() {

    if(math_op[-1] === '(' && math_op[-2] === '*') {
        math_op = math_op.slice(0, -2);
    } else {
        math_op = math_op.slice(0, -1);
    }
    display.value = math_op
        .replace(/\*/g, '×')
        .replace(/\//g, '÷');
        
    /* let helper = math_op;
    if(helper[-1] === '(' && helper[-2] === '*') {
        helper = helper.slice(0, -2);
        helper += '(';
        display.value = helper;
    }
    helper = "";
    */

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