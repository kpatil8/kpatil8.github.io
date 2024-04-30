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

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.num').forEach(function(button) {
        button.addEventListener('click', function() {
            var value = this.getAttribute('data-value');
            appendToDisplay(value);
        });
    });

    document.querySelectorAll('.operator').forEach(function(button) {
        button.addEventListener('click', function() {
            var value = this.getAttribute('data-value');
            appendToDisplay(value);
        });
    });

    document.getElementById('equals').addEventListener('click', function() {
        calc();
    });

    document.getElementById('clear').addEventListener('click', function() {
        clearcalc();
    });
});
