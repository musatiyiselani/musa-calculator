const display = document.getElementById("display");

let math_op = "";

function appendToDisplay(input) {
    /* if(input != '.' && math_op === '0'){
        math_op = input;
        display.value = input;
    }
    else if(input === '÷'){
        math_op += '/';
        display.value += input;
    }
    else if(input === '^'){
        math_op += '**';
        display.value += input;
    }
    // π
    else if(input === 'π'){
        math_op += Math.PI;
        display.value += input;
    }
    else if(input === '^2'){
        math_op += '**2';
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
    */

    if((input != '.' && input != '²') && math_op === '0'){
        math_op = input;
        display.value = input;
    }
    else {
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
        let result = '';
        for(let i = 0; i < math_op.length; i++) {
            if(math_op[i] === '÷'){
                result += '/';
            }
            else if(math_op[i] === '^'){
                result += '**';
            }
            else if(math_op[i] === 'π'){
                result += Math.PI;
            }
            else if(math_op[i] === '²'){
                result += '**2';
            }
            else if (math_op[i] === '×'){
                result += '*';
            }
            else{
                result += math_op[i];
            }
        }

        display.value = eval(result);
        math_op = display.value;
        result = "";
    }
    catch {
        display.value = "Error";
        math_op = "";
        result = '';
    }
}