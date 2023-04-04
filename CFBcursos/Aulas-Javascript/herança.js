const f_tipoMilitar = document.querySelector('#f_tipoMilitar')
const f_tipoNormal = document.querySelector('#f_tipoNormal')
const f_blindagem = document.querySelector('#f_blindagem')
const f_munição = document.querySelector('#f_munição')
const f_nome = document.querySelector('#f_nome')
const f_portas = document.querySelector('#f_portas')
const carros = document.querySelector('#carros')
const addCarro =  document.querySelector('#btn_addCarro')

let veiculos=[]

const removerCarro = (quem)=>{
    veiculos=veiculos.filter((e)=>{
        return e.nome!=quem
    })
}

f_tipoMilitar.addEventListener('click',(evt)=>{
    f_nome.value=''
    f_portas.value=0
    f_blindagem.value=0
    f_munição.value=0
    f_blindagem.removeAttribute('disabled')
    f_munição.removeAttribute('disabled')
})

f_tipoNormal.addEventListener('click',(evt)=>{
    f_nome.value=''
    f_portas.value=0
    f_blindagem.value=0
    f_munição.value=0
    f_blindagem.setAttribute('disabled')
    f_munição.setAttribute('disabled')
})

const gerenciarCarros=()=>{
    carros.innerHTML=''
    veiculos.map((el)=>{
        const div = document.createElement('div')
        const btn = document.createElement('button')
        btn.innerHTML = 'Remover'
        btn.addEventListener('click',(evt)=>{
            const quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            console.log(veiculos)
            gerenciarCarros()
        })

        div.setAttribute('class', 'carro')
        div.setAttribute("data-nome",el.nome)
        div.innerHTML=`Nome: ${el.nome}<br/>`
        div.innerHTML+=`Portas: ${el.portas}<br/>`
        div.innerHTML+=`Blindagem: ${el.blindagem}<br/>`
        div.innerHTML+=`Munição: ${el.munição}<br/>`
        div.innerHTML+=`cor: ${el.cor}<br/>`
        carros.appendChild(div)
        div.appendChild(btn)
        
    })
    
}

addCarro.addEventListener("click",()=>{
    if(f_tipoNormal.checked){
        const c = new Carro(f_nome.value,f_portas.value)
        veiculos.push(c)
    }else{
        const c = new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_munição.value)
        veiculos.push(c)
    }
    gerenciarCarros()
})

class Carro {// Classe Pai / base
    constructor(nome,portas){
        this.nome=nome
        this.portas= portas
        this.ligado= false
        this.vel=0
        this.cor=''
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{// extends siginifca herança de carro
    constructor(nome,portas, blindagem,munição){ //classe filho
        super(nome,portas)
        this.blindagem=blindagem
        this.munição=munição
        this.setCor('verde')
    }
    atirar=function(){
        if(this.munição>0){
            this.munição--
        }
    }
}

class Utilitario extends Carro{
    constructor(nome,portas,lugares){
        super(nome,portas)
        this.lugares=lugares
    }
}

const c1 = new Carro ('normal', 4)
c1.ligar()
c1.setCor('preto')

const c2 = new Militar('Lutador',1,100,50)
c2.setCor('Camuflado')
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()



console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?'Sim':'Não')}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log('--------------------')

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?'Sim':'Não')}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.munição}`)
console.log(`Cor: ${c2.cor}`)
console.log('--------------------')