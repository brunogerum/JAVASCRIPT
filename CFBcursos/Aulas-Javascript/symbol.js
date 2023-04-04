// const s1 = Symbol()
// const s2 = Symbol()

// const s3 = Symbol.for('bruno')
// const s4 = Symbol()

// console.log(s1)
// console.log(s2)

// console.log(Symbol.keyFor(s1))

class Jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores=[new Jogador('j1'),new Jogador('j2'),new Jogador('j3'),new Jogador('j4'),new Jogador('j1'),new Jogador('j3')]

let s1=jogadores[3].id

let s=[]

let s_jogadores=jogadores.filter((j)=>{
    return j.nome=='j1'
})

s=s_jogadores.map((j)=>{//Map passa por todos os componentes e retorna um novo Array do mesmo tamanho da coleção que você aplicou o map. O foreach passa por todos elementos e não retorna nada.  O forEach só faz executar uma ação no array existente, enquanto o map faz a alteração do array adicionando em um novo array
    return j.id
})

console.log(s_jogadores)
console.log(s)

// jogadores=jogadores.filter((j)=>{
//     return j.id!=s1
// })

//console.log(jogadores)