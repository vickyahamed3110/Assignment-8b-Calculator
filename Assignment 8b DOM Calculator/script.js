let outputScreen = document.getElementById("output-screen");
let resultElement = document.getElementById("result");

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try {
        resultElement.value = eval(outputScreen.value);
    } catch (err) {
        resultElement.value = "Invalid Input";
    }
}

function Clear() {
    outputScreen.value = "";
    resultElement.value = "";
}