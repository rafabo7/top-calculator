// Math operations availables
function add(a, b) {return a + b}
function subs(a, b){return a - b}
function div(a, b){return a/b}
function mult(a, b){return a*b}
function mod(a, b){return a%b}

// Operation function
function operate(a, b, op) {
    a = Number(a)
    b = Number(b)
    switch (op){
        case "+":
            return add(a, b)
        case "-":
            return subs(a, b)
        case "/":
            return div(a, b)
        case "*":
            return mult(a, b)
        case "%":
            return mod(a, b)
    }
}

// Inicializing storage as falst values for checks
let a = ''
let b = ''
let op = ''

// Target the buttons
const display = document.querySelector('#screen')
const numbers = document.querySelectorAll('[data-number]')
const operation = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('#equals')
const delBtn = document.querySelector('#del')
const clearBtn = document.querySelector('#clear')

// Event listeners for buttons, with theis suitable functions
numbers.forEach(button => button.addEventListener('click', () => {
    if (!op) {
        if (button.textContent == '.'){
            a += '.'
        } else if (a.includes('.')) {
            a += button.textContent
        } else {
            a += button.textContent
        }
        display.textContent = a
    }
    else {
        if (button.textContent == '.'){
            b += '.'
        } else if (b.includes('.')) {
            b += button.textContent
        } else {
            b += button.textContent
        }
        display.textContent = b
    }
}))

operation.forEach(button => button.addEventListener ('click', () => {
    if (!op){
    op = button.textContent
    } else {
        a = operate(a, b, op)
        display.textContent = a
        op = button.textContent
        b = ''
    }
}))

equals.addEventListener('click', () => {
    if (!a || !b || !op){
        return 
    } else {
    let result = operate(a, b, op)
    display.textContent = result}
    
})

clearBtn.addEventListener('click', () => {
    a = ''
    b = ''
    op = ''
    display.textContent = ''
})