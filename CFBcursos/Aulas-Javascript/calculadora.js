const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const tcpy = document.getElementById('tcpy')
const tlimpar = document.getElementById('tlimpar')
const tigual = document.getElementById('tigual')
const teste = document.getElementById('teste')
const calc_aba = document.getElementById('calc_aba')
const calc = document.getElementById('calc')
// const tmais = document.getElementById('t+')
// const tmenos = document.getElementById('t-')
// const tdivisao = document.getElementById('td')
// const tmult = document.getElementById('tx')

let sinal = false
let decimal = false

teclasNum.map((el)=>{
    el.addEventListener('click',(evt)=>{
        sinal = false
        // if(display.innerHTML=='0'){
        //     display.innerHTML=''
        // }
         if(evt.target.innerHTML==','){
            
            if(!decimal){
                
                decimal = true
                if(display.innerHTML=="0"){
                    display.innerHTML='0.'
                }
                else{
                    display.innerHTML+='.'
                }
            }
        }else{
            if(display.innerHTML=='0'){
                display.innerHTML=''
             }
            display.innerHTML+=evt.target.innerHTML
        }    
    })
})

tlimpar.addEventListener('click',(evt)=>{
    sinal = false
    decimal = false
    if(display.innerHTML=='0'){
        display.innerHTML=''
    }else if(display.innerHTML==''){
        display.innerHTML='0' 
    }else{ display.innerHTML='0'}
    
})




teclasOp.forEach((el) => {
    el.addEventListener('click',(evt)=>{
        decimal = false
        if(!sinal){
            sinal = true
            if(display.innerHTML=='0'){
                display.innerHTML=''
            }
            if(evt.target.innerHTML=='x'){
                display.innerHTML+='*'
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
        
    })    
})

tigual.addEventListener('click',(evt)=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

tcpy.addEventListener('click',(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)    
    // teste.select()
    // teste.setSelectionRange(0.99999) //mobile
    // navigator.clipboard.writeText(teste.value) 
})

// tmais.addEventListener('click',()=>{
//     Number(display.innerHTML)

calc_aba.addEventListener('click',(evt)=>{
    calc.classList.toggle('calc_exibir')
})