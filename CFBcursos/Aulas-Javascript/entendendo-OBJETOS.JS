// class Pessoa{
//     constructor(){
//         this.nome = 'Bruno'
//     }
// }

//let p1 = new Pessoa()//  isntancia um objeto da clase pessoa
class Pessoa{
    constructor(pnome){ // quando construtor pede um parametro
        this.nome = pnome
    }
}

let p1 = new Pessoa('Bruno') // sou obrigado a lançar o paramentro na instanciação da classe
let p2 = new Pessoa('Marcelo') 
let p3 = new Pessoa('Gerum') 

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)