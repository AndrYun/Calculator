let a = ''; // first number
let b = ''; // second number 
let sign = ''; // sign of operation 
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', '/', '*'];

// screen for out number
const outNumber = document.querySelector('.calc-screen p'); 

function clearAll() {
    a = ''; // first number
    b = ''; // second number 
    sign = ''; // sign of operation 
    finish = false;
    outNumber.textContent = 0;
}
document.querySelector('.AC').onclick = clearAll;

const Calc = document.querySelector('.buttons').onclick = (event) => {
    // button was clicked 
    if(!event.target.classList.contains('btn')) return;
    // clearAll was clicked (AC)
    if(event.target.classList.contains('AC')) return;

    outNumber.textContent = '';

    //receive a clicked btn 
    const key = event.target.textContent;

    // if was clicked btn 0-9 or .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key; 
            outNumber.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            outNumber.textContent = b;
        } else {
            b += key;
            outNumber.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    // if was clicked + - / * 
    if (action.includes(key)) {
        sign = key; 
        console.log(a, b, sign);
        outNumber.textContent = sign; 
        return;
    }

    // equal =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    outNumber.textContent = 'Wrong';
                    a = '';
                    b = '';
                    sign = ''; 
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        outNumber.textContent = a;
        console.log(a, b, sign);
    }
}

module.exports = Calc;


