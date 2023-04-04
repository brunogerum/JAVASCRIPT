function* cores(){//asterisco transforma ela em função geradora
     yield 'vermelho'
     yield 'Verde'
     yield 'Azul'
     
}

const itercores = cores()
console.log(itercores.next().value)//next() puxa o proximo dado e o value o valor desse dado
console.log(itercores.next().value)
console.log(itercores.next().value)

function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    const idade = yield 'Qual sua idade?'
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}, e você tem ${idade} anos.`
}

const iter = perguntas()
console.log(iter.next().value)
console.log(iter.next('Bruno').value)
console.log(iter.next('Futebol').value)
console.log(iter.next(32).value)


function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i > 5)
            break
    }
    
}

const iteracao = contador()
for( let i = 0; i < 10; i++){
console.log(iteracao.next().value)
}


for(c of iteracao){
    console.log(c)
    }
    