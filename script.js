function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        let expression = display.value;
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        expression = expression.replace(/\^/g, '**');
        const result = Function('"use strict"; return (' + expression + ')')();
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}