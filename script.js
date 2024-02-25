// Math operations availables
function add(a, b) {return a + b}
function subs(a, b){return a - b}
function div(a, b){return a/b}
function mult(a, b){return a*b}
function mod(a, b){return a%b}

// Operation function
function operate(a, b, op) {
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

let a = ''
let b = ''
let op = ''

const display = document.querySelector('#screen')
const numbers = document.querySelectorAll('[data-number]')
const operation = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('#equals')

numbers.forEach(button => button.addEventListener('click', () => {
    if (!op) {
        display.textContent += button.textContent
        a += button.textContent
    }
    if (op) {
        display.textContent += button.textContent
        b += button.textContent
    }
}))

operation.forEach(button => button.addEventListener ('click', () => {
    display.textContent += ` ${button.textContent} `
    op = button.textContent
}))

equals.addEventListener('click', () => {
    a = Number(a)
    b = Number(b)
    let result = operate(a, b, op)
    display.textContent = result
})
