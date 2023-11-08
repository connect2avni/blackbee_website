
var add = document.getElementById('add');

add.addEventListener('click', addition);

function addition() {
    var num1 = document.getElementById('num1'); // var num1 = $('#num1')
    var num2 = document.getElementById('num2');
    var res = document.getElementById('res');

    var sum = 0;

    sum = parseInt(num1.value) + parseInt(num2.value);
    res.value = sum;
}