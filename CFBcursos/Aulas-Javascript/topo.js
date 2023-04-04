//const head=document.head
const body=document.body

//const estilo='<link rel="stylesheet" href="topo.css"></link>'
//head.innerHTML+=estilo

const estilotopo=
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: #eee;"+
    "width: 100%;"
const topo= document.createElement('div')
topo.setAttribute('id','topo')
topo.setAttribute('style',estilotopo)

body.prepend(topo)//prepend anexa no inicio enquanto prepend anexa no final

const estiloLogoImg=
    "width:150px"

const logo = 
"<div id='logo' class='logo'>"+
"<img src='../logo.png' title='CFBcursos' style='"+estiloLogoImg+"'/>"+
"</div>"

topo.innerHTML=logo

const login = 
"<div id='login' class='login'>"+
"<p id='matricula'>Matricula: <span></span></p>"+
"<p id='nome'>Nome: <span></span></p>"+
"</div>"
topo.innerHTML+=login
