const abutton = document.querySelector('#AddSolve')
const add1 = document.querySelector('#Addinput1')
const add2 = document.querySelector('#Addinput2')

const sbutton = document.querySelector('#SubSolve')
const sub1 = document.querySelector('#Subinput1')
const sub2 = document.querySelector('#Subinput2')

const mbutton = document.querySelector('#MulSolve')
const mul1 = document.querySelector('#Mulinput1')
const mul2 = document.querySelector('#Mulinput2')

const dbutton = document.querySelector('#DivSolve')
const div1 = document.querySelector('#Divinput1')
const div2 = document.querySelector('#Divinput2')

abutton.addEventListener('click', () =>
    {alert(add1.value*1 + add2.value*1)})

sbutton.addEventListener('click', () =>
    {alert(sub1.value - sub2.value)})

mbutton.addEventListener('click', () =>
    {alert(mul1.value * mul2.value)})

dbutton.addEventListener('click', () =>
    {alert(div1.value / div2.value)})