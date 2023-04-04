function aluno(nome, nota){
    this.nome = nome // o primeiro nome faz referencia ao elemento da função nome
    this.nota = nota // this serve para nomear com mesmo nome a a variavel e o elemento da função

  
    

    this.dados_anonimo = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)   //gera um atraso na execução, conta um tempo e depois executa   1000 = 1s
    }

    this.dados_arrow = function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)   //gera um atraso na execução, conta um tempo e depois executa   1000 = 1s
    }
}



const al1 = new aluno('Bruno', 100)

al1.dados_anonimo()
al1.dados_arrow()