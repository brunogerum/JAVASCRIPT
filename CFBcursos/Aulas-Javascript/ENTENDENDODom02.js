const caixa1 = document.querySelector('#caixa1')
const btn_c1 = [...document.querySelectorAll('.curso')]

// const novoElemento = document.createElement('div') // cria uam tag no html
// novoElemento.setAttribute('id','c7') //('atributo','valor')adciona classe e id a tag criada anteriormente
// novoElemento.setAttribute('class','curso c1')
// novoElemento.innerHTML = "ReactNative" // adiciona texto ao elemento

// caixa1.appendChild(novoElemento) // anexar filho, para criar o elemento criado antes

// AGORA TENTANDO ADICIONAR DINAMICAMENTE, CRIAREMOS O ARRAY E COMENTAREMOS AS DIV

const Cursos = ['HTML','CSS','Javascript','PHP','React','MySQL','ReactNative']

//para percorrer o array usar o foreach ou o map
//map é indicado para percorrer a coleção toda
Cursos.map((el,chave)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+ (chave + 1)) // sem os parenteses ele concatena
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = el
    const btn_lixeira = document.createElement('img')
    btn_lixeira.setAttribute('src','./lixeira.png') //quando setar o atributo de img com src é para buscar onde esta a img
    btn_lixeira.setAttribute('class','lixeira')
    

    //comentando

//     novoElemento.addEventListener('click',(evt)=>{// cria evento igual o onclick - temos que criar função anonima para gerenciar
        
//         caixa1.removeChild(evt.target)
//             //colocar o parent = pai = no caso aqui caixa1
//             // o evt.target é o item que eu clico
//     }) 

//     caixa1.appendChild(novoElemento) 
// })


btn_lixeira.addEventListener('click',(evt)=>{// mudar de novoElemento para btn_lixeira, para o clique funcionar so no icone
        console.log(evt.target.parentNode)
        caixa1.removeChild(evt.target.parentNode)
        // o evt.target não é filho, entoa tem que apontar o pai dele
    }) 
    novoElemento.appendChild(btn_lixeira) // para adcionar temos que colocar no  novo elemento, escreve o append child para dizer que quer adicioanr e diz o que quer add dentro do parenteses
    caixa1.appendChild(novoElemento) 
})