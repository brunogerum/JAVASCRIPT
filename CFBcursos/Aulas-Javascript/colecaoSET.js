const caixa = document.querySelector('#caixa')

//coleção Set não permite estradas duplicadas!!

let musicas = new Set(['musica1','musica boa', 'musica10'])

musicas.add('musica muito legal')
musicas.add('musica1')
musicas.add('musica1')
musicas.add('musica10')

musicas.delete('musica1')

console.log(musicas)

musicas.forEach((el)=>{
    caixa.innerHTML += el + '<br/>'
})

for (m of musicas) {
    console.log(m)
    caixa.innerHTML += `esse é o valor do ${m} <br/>`

}


// Template Strings

const carros = ['uno', 'palio', 'gol', 'polo', 'golf']

let ol = `<ol>`

carros.map((el)=>{
    ol += `<li>${el}</li>`
})
ol + `</ol>`

caixa.innerHTML += ol
