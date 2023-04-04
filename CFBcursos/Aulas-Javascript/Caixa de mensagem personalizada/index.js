import{Cxmsg} from "./cxmsg2.js"

const config={
    cor:'#48f',
    tipo:"sn", //tipos :ok,sn,oc
    textos:["SIM","NÃO"],
    comando_sn:()=>{null}
}

// Cxmsg.config(config)

const fsim=()=>{
    console.log("Botao sim pressionado")
}


const btn_mostrarcxmsg=document.querySelector('#btn_mostrarcxmsg')
const btn_mostrarcxmsg2=document.querySelector('#btn_mostrarcxmsg2')
const btn_mostrarcxmsg3=document.querySelector('#btn_mostrarcxmsg3')

btn_mostrarcxmsg.addEventListener("click",()=>{
    config.tipo="ok"
    Cxmsg.mostrar(config,"Curso","Javascript")
})


btn_mostrarcxmsg2.addEventListener("click",()=>{
    config.tipo="sn"
    config.comando_sn=()=>{fsim()}
    Cxmsg.mostrar(config,"youtube","canal de youutube")
})


btn_mostrarcxmsg3.addEventListener("click",()=>{
    config.tipo="sn"
    config.textos=["OK","Cancela"]
    config.comando_sn=()=>{}
    Cxmsg.mostrar(config,"mostrar","a tabela")
})