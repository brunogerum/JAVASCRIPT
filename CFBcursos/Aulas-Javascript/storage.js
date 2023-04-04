const f_texto = document.querySelector('#f_texto')
const p_texto = document.querySelector('#f_texto')
const btn_texto = document.querySelector('#btn_texto')

document.querySelector('#btn_texto').addEventListener("click",(evt)=>{

})

let num = 10
localStorage.setItem("numero",num)
localStorage.setItem("numero",33)
alert(localStorage.getItem(localStorage.key(0)))
alert(localStorage.length)
//alert(localStorage.getItem("numero"))