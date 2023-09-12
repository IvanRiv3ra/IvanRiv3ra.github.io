const number1 = Math.floor(Math.random() * 10) + 1;
const number2 = Math.floor(Math.random() * 10) + 1;
document.getElementById('num1').textContent = number1;
document.getElementById('num2').textContent = number2;

const correctSum = number1 + number2;
const inputAns = document.getElementById('answer');
const accsButton = document.getElementById('accesButton');

inputAns.addEventListener('input', function() {
    const userAns = parseInt(inputAns.value);
    if (!isNaN(userAns) && userAns === correctSum) {
        accsButton.disabled = false;
    } else {
        accsButton.disabled = true;
    }
});

window.addEventListener('load', function() {
    inputAns.value = ''; // Limpia el contenido del campo de entrada al cargar la página
});
