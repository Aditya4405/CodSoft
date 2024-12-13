let currentExpression = '';

function appendValue(value) {
    currentExpression += value;
    document.getElementById('result').value = currentExpression;
}

function operate(operator) {
    currentExpression += ` ${operator} `;
    document.getElementById('result').value = currentExpression;
}

function calculate() {
    try {
        currentExpression = eval(currentExpression).toString();
        document.getElementById('result').value = currentExpression;
    } catch (error) {
        alert("Invalid Expression");
    }
}

function clearResult() {
    currentExpression = '';
    document.getElementById('result').value = '';
}
