let display = document.getElementById('display');
let equation = '';

function appendToDisplay(value) {
    equation += value;
    display.value = equation;
}

function clearDisplay() {
    equation = '';
    display.value = '';
}

function calculate() {
    try {
        equation = eval(equation).toString();
        display.value = equation;
    } catch (error) {
        equation='';
        display.value = 'Syntax Error';
    }
}
