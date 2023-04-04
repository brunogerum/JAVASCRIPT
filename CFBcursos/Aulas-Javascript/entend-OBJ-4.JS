const Pessoa = {
    nome,
    idade,
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    },

}
const p2 = Pessoa
Pessoa.setNome('Enzo')

console.log(Pessoa.nome)

console.log(p2.getNome())