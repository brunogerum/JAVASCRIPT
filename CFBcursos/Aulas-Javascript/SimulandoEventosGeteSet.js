const tmp=document.querySelector("#tmp")
const nvl=document.querySelector("#nvl")
const prs=document.querySelector("#prs")


let dados={
    _temperatura:0,
    _nivel:0,
    _pressao:0,
    set valores(val){
        this._temperatura=val.temperatura
        this._nivel=val.nivel
        this._pressao=val.pressao
        tmp.innerHTML=this._temperatura
        nvl.innerHTML=this._nivel
        prs.innerHTML=this._pressao
    },
    get valores(){
        return[this._temperatura,this._nivel,this._pressao]
    }
}

const buscarDados=()=>{
    const endpoint="https://fetchexemplo.brunogerum.repl.co"

    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        dados.valores=res
    })
}

let intervalo=setInterval(buscarDados,1000)

console.log(dados.valores)