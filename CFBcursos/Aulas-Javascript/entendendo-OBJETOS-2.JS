
class Carro{
    constructor(pnome,ptipo){ // quando construtor pede um parametro
        this.nome = pnome
        if(ptipo==1){
            this.tipo = "Esportivo"
            this.velmax = 300
        } else if(ptipo==2){
            this.tipo='utilitário'
            this.velmax = 160
        } else if (ptipo==3){
            this.tipo = 'SUV'
            this.velmax = 200
        } else{
            this.tipo = 'passeio'
            this.velmax = 140
        }
    }
    getNome(){
        return this.nome
    }
    getInfo(){
        return[this.nome,this.tipo,this.velmax]
    }

    setNome(nome){
        this.nome=nome
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade Máxima: ${this.velmax}`)
        console.log('--------------------------------------')
    }
}



let c1 = new Carro('Muito rapido',1)
let c2 = new Carro('Bombadão',3) 
let c3 = new Carro('Luxo',2) 
let c4 = new Carro('Comum',4)

c1.setNome('Super veloz')

c1.info()

console.log(c1.getNome())

console.log(c1.getInfo())

// console.log(c1.nome)
// console.log(c1.tipo)
// console.log(c1.velmax)
// console.log(c2.nome)
// console.log(c3.nome)
// console.log(c4.nome)