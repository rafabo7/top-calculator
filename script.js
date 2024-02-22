// Math operations availables
function add(a, b) {return a + b}
function subs(a, b){return a - b}
function div(a, b){return a/b}
function mult(a, b){return a*b}

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
    }
}

let a = 0
let b = 0
let op = ''

