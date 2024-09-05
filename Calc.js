const button = document.querySelector('#AddSolve')
const add1 = document.querySelector('#Addinput1')
const add2 = document.querySelector('#Addinput2')

button.addEventListener('click', => ()
{alert(add1.value + add2.value)})