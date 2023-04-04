const carro = document.getElementById('carro')
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_parar = document.getElementById("btn_parar")
const btn_direita = document.getElementById("btn_direita")

const init=()=>{
    carro.style='position:relative;left:0px;width:100px;'
    tamMax= window.innerWidth - parseInt(carro.style.width)
    }

let anima = null

let tamMax = null

const mover=(dir)=>{
    if(dir > 0){//indo pra direita
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left = parseInt(carro.style.left) + (10*dir) + 'px'
            anima=setTimeout(mover,20,dir)
        }else{
            clearTimeout(anima)
            mover(-1)
        }
    }else if(dir < 0){//indo pra esquerda
        if(parseInt(carro.style.left) >= 0){
            carro.style.left = parseInt(carro.style.left) + (10*dir) + 'px'
            
            anima=setTimeout(mover,20,dir)
        }else{
            clearTimeout(anima)
            mover(1)
        }
    }
}

// btn_esquerda.addEventListener('click',()=>{
    // let pos =parseInt(carro.style.left) // antes estava em string, e para funcionar tem que botar parseint pra ser o valor
    // pos-= 10
    // carro.style=`position:relative; left:${pos}px`

    //clearInterval(anima)
    //anima=setInterval(mover,20,-1) // paremetro dir depois da virgula -1
//     clearTimeout(anima)
//     mover(-1)
// })

btn_direita.addEventListener('click',()=>{
//   let pos =parseInt(carro.style.left) // antes estava em string, e para funcionar tem que botar parseint pra ser o valor
//     pos+= 10
//     carro.style=`position:relative; left:${pos}px`
    //clearInterval(anima)
    //anima=setInterval(mover,20,1)
    clearTimeout(anima)
    mover()
})

btn_parar.addEventListener('click',()=>{
    //   let pos =parseInt(carro.style.left) // antes estava em string, e para funcionar tem que botar parseint pra ser o valor
    //     pos+= 10
    //     carro.style=`position:relative; left:${pos}px`
        //clearInterval(anima)
        clearTimeout(anima)
    })

//window.onload=init

window.addEventListener('load', init())
window.addEventListener('rezise', ()=>{
  tamMax= window.innerWidth - parseInt(carro.style.width)  
})

