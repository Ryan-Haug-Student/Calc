const Inp1 = document.querySelector('#gen1')
const Inp2 = document.querySelector('#gen2')
let operator = document.querySelector('#op')
let submit = document.querySelector('#solve')

const sol = document.querySelector('#answer')
let a =  0

function domath(){
    if(op.value == "+") {
        a = (gen1.value*1 + gen2.value*1)
    }

    if(op.value == "-") {
        a = (gen1.value - gen2.value)
    }

    if(op.value == "*") {
        a = (gen1.value * gen2.value)
    }

    if(op.value == "/") {
        a =(gen1.value / gen2.value)
    }

    sol.textContent = "Answer = " + a
}

submit.addEventListener('click', (domath))

// gen2.addEventListener('keydown', (domath))