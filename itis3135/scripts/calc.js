function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calc() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}

function clearcalc() {
    document.getElementById('display').value = '';
}
