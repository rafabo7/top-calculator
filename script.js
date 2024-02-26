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
    let res
    switch (op){
        case "+":
            res = add(a, b)
            break
        case "-":
            res = subs(a, b)
            break
        case "/":
            res = div(a, b)
            break
        case "*":
            res = mult(a, b)
            break
        case "%":
            res = mod(a, b)
            break
    }
    if (res == Infinity) {
        return 'Math ERROR'
    }
    if (!Number.isInteger(res)){
        return res.toFixed(8)
    } else {
        return res.toString()
    }
}

// Inicializing storage as falst values for checks
let a = ''
let b = ''
let op = ''
let result = ''

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
    if (!a){
        a = result
        display.textContent = a
        op = button.textContent
    }
    else if (!op){
        op = button.textContent
        }
    else {
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
    result = operate(a, b, op)
    display.textContent = result
    a = ''
    b = ''
    op = ''}
    
})

clearBtn.addEventListener('click', () => {
    a = ''
    b = ''
    op = ''
    display.textContent = ''
})