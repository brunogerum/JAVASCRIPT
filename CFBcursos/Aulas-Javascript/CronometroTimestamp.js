import{Cxmsg} from "./Caixa de mensagem personalizada/cxmsg.js"

const config={
  cor:'#080'
}

Cxmsg.config(config)

const timer = document.getElementById('timer')
const btn_iniciar = document.getElementById('btn_iniciar')
const btn_parciais = document.getElementById('btn_parcial')
const btn_parar = document.getElementById('btn_parar')
const btn_zerar = document.getElementById('btn_zerar')
const parciaisregistradas = document.getElementById('parciaisregistradas')



let intervalo=null
let tmpini=null


const ContagemTempo=()=>{
    const tmpatual=Date.now()
    let cont=tmpatual-tmpini
    let seg= cont/1000
timer.innerHTML=converter(seg)
}

const converter=(seg)=>{
    const hora= Math.floor(seg/3600)
    let resto = seg%3600
    const min= Math.floor(resto/60)
    const segundo = Math.floor(resto%60)
    
    const format= (hora < 10 ? '0' + hora : hora) + ':' + 
    (min < 10 ? '0' + min : min) + ':' + (segundo < 10 ? '0' + segundo : segundo)
    return format
}


btn_iniciar.addEventListener("click",(evt)=>{
    tmpini=Date.now()
   intervalo=setInterval(ContagemTempo,1000)
   
})

btn_parciais.addEventListener("click",(evt)=>{

    let parcial = document.createElement('div')
    parcial.setAttribute("id","timer")
    parcial.setAttribute("class","timer")
    parcial.innerHTML=timer.innerHTML
    parciaisregistradas.appendChild(parcial)
})

btn_parar.addEventListener("click",()=>{
    clearInterval(intervalo) 
 })

 btn_zerar.addEventListener("click",()=>{
    tmpini=Date.now()
    timer.innerHTML=('00:00:00')
    clearInterval(intervalo)
    parciaisregistradas.innerHTML=''
    Cxmsg.mostrar("Cronometro","o cronometro foi zerado")
 })
 
