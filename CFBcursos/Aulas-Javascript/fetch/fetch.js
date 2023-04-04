const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_pressao = document.getElementById("p_pressao")
const btn_fetch = document.getElementById("btn_fetch")

const obterDados=()=>{

    const endpoint = 'https://fetchexemplo.brunogerum.repl.co'
    fetch(endpoint)
    //.then(res=>res.text()) //recebe o retorno do fetch
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML="Temperatura: " + dados.temperatura
        p_nivel.innerHTML="Nível: " + dados.nivel
        p_pressao.innerHTML="Pressão: " + dados.pressao
    })
}

//let interval= setInterval(obterDados,3000)

btn_fetch.addEventListener("click",()=>obterDados())

let dados={
    nome:"Bruno",
    canal:"CFBCursos",
    curso:"Javascript"
}

let cabecalho={
    method: "POST",
    body: JSON.stringify(dados)
}

const gravarDados=()=>{
    const endpoint="https://fetchexemplo.brunogerum.repl.co"
    fetch(endpoint,cabecalho //{method: "POST",
    //body: JSON.stringify(dados)}
    )
         
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}