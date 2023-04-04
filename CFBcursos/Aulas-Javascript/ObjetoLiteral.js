const objetos=document.getElementById('objetos')

const computador={ // ao colocar chave ele ja é considerado um objeto
    cpu:'',
    ram:'',
    hd:'',
    info:function() {//  da pra adicionar metodos
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

computador['monitor']='22pol'
computador.placaVideo='rtx3090'
//delete(computador.hd)

//console.log(computador.cpu)
//console.log(computador['ram'])

const c1=Object.assign({},computador)//associação de objetos -- tipo clonar

c1.info()

const c2 = Object.create(computador)//para criar um objeto baseado em outro objeto

c2.cpu='i9'
c2.ram='32gb'
c2.hd='2tb'
c2.info()

const o1 = {obj1:'1'}
const o2 = {obj2:'2'}
const o3 = {obj3:'3'}
const o4 = Object.assign(o1,o2,o3)
console.log(o4)

const computadores=[
    {   cpu:'i9',
        ram:'64gb',
        hd:'2TB'
    },
    {   cpu:'i5',
        ram:'32gb',
        hd:'2TB'
    },
    {   cpu:'i7',
        ram:'16gb',
        hd:'1TB'
    }

]
computadores.forEach((c)=>{// serve para percorrer o array
    
    const div=document.createElement('div')
    div.innerHTML= c.cpu + '</br>' + c.ram + '</br>' + c.hd
    div.setAttribute('class','computador')
    objetos.appendChild(div) //serve para colocar dentro da div, sem isso ele não coloca 
})

// computador.info()
// console.log(computador)
// //objetos.innerHTML=computador.cpu + '-' + computador.ram + '-'+ computador.hd
// objetos.innerHTML=JSON.stringify(computadores)