const numero = document.getElementById('numero')
const btn_promessa = document.getElementById('btn_promessa')

btn_promessa.addEventListener('click',(evt)=>{
    numero.innerHTML='Processando...'
 console.log(promessa())
        // .then((retorno)=>{// se deu certo
        //     numero.innerHTML=retorno
        //     numero.classList.remove('erro')
        //     numero.classList.add('ok')
        // }) 
        // .catch((retorno)=>{// se deu errado
        //     numero.innerHTML=retorno
        //     numero.classList.add('erro')
        //     numero.classList.remove('ok')
        // }) 

})


const promessa=()=>{

    let p = new Promise((resolve,reject)=>{
        let resultado = false
        let tempo = 3000 // 3 segundos 
        
        setTimeout(()=>{
            if(resultado){
                resolve('Deu tudo certo')
                numero.innerHTML='Deu tudo certo'
                numero.classList.remove('erro')
                numero.classList.add('ok')
            } else{
                reject('Deu tudo errado')
            numero.innerHTML='Deu tudo errado'
            numero.classList.add('erro')
            numero.classList.remove('ok')
            }
        },tempo)
    
    })
    
    return p
    // promise.then((retorno)=>{
    //     numero.innerHTML=retorno
    //     numero.classList.remove('erro')
    //     numero.classList.add('ok')
    // }) // se deu certo
    // promise.catch((retorno)=>{
    //     numero.innerHTML=retorno
    //     numero.classList.add('erro')
    //     numero.classList.remove('ok')
    // }) // se deu errado
}

numero.innerHTML = 'esperando'
