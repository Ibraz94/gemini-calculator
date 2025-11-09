"use strict";
var resultInput = document.getElementById('result');
function appendCharacter(char) {
    resultInput.value += char;
}
function clearDisplay() {
    resultInput.value = '';
}
function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}
function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value).toString();
    }
    catch (error) {
        resultInput.value = 'Error';
    }
}
// Attach functions to the window object to make them accessible from the HTML
window.appendCharacter = appendCharacter;
window.clearDisplay = clearDisplay;
window.deleteLast = deleteLast;
window.calculateResult = calculateResult;
