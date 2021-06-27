let operand = '', firstOperand = '', lastOperand = '', index = 0;

const inputWindow = document.getElementById('inputWindow');

document.getElementById('C').addEventListener('click', function () {
    operand = '';
    inputWindow.value = '';
})

inputWindow.addEventListener('keydown', (event) => {
    event.preventDefault();
});

function f() {
    firstOperand = inputWindow.value;
    inputWindow.value = '';
}

document.getElementById('b0').addEventListener('click', function () {
    inputWindow.value += '0';
})

document.getElementById('b1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.getElementById('b2').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.getElementById('b3').addEventListener('click', function () {
    inputWindow.value += '3';
})

document.getElementById('b4').addEventListener('click', function () {
    inputWindow.value += '4';
})

document.getElementById('b5').addEventListener('click', function () {
    inputWindow.value += '5';
})

document.getElementById('b6').addEventListener('click', function () {
    inputWindow.value += '6';
})

document.getElementById('b7').addEventListener('click', function () {
    inputWindow.value += '7';
})

document.getElementById('b8').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.getElementById('b9').addEventListener('click', function () {
    inputWindow.value += '9';
})

document.getElementById('point').addEventListener('click', function () {
    inputWindow.value += '.';
})

document.getElementById('plus').addEventListener('click', function () {
    operand = '+';
    f();
})

document.getElementById('minus').addEventListener('click', function () {
    operand = '-';
    f();
})

document.getElementById('times').addEventListener('click', function () {
    operand = '*';
    f();
})

document.getElementById('divide').addEventListener('click', function () {
    operand = '/';
    f();
})

document.getElementById('radic').addEventListener('click', function () {
    index++;
    let p = document.createElement('p');
    p.textContent = `${index}. ${inputWindow.value} ^ 0.5 = `;
    inputWindow.value = (+inputWindow.value) ** 0.5;
    p.textContent += `${inputWindow.value}`;
    document.body.append(p);
})

document.getElementById('equally').addEventListener('click', function () {
    switch (operand) {
        case '+':
            lastOperand = inputWindow.value;
            inputWindow.value = +firstOperand + +inputWindow.value;
            break;
        case '-':
            lastOperand = inputWindow.value;
            inputWindow.value = +firstOperand - +inputWindow.value;
            break;
        case '*':
            lastOperand = inputWindow.value;
            inputWindow.value = +firstOperand * +inputWindow.value;
            break;
        case '/':
            lastOperand = inputWindow.value;
            inputWindow.value = +firstOperand / +inputWindow.value;
    }
    index++;
    let p = document.createElement('p');
    p.textContent = `${index}. ${firstOperand} ${operand} ${lastOperand} = ${inputWindow.value}`;
    document.body.append(p);
})