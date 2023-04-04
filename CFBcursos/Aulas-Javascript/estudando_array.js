const caixa= document.querySelector('#caixa')

let cores = ['azul','verde','vermelho',['claro','escuro','médio']]
let cursos = ['HTML', 'CSS', 'Javascript',cores]

console.log(cursos[3][3][1])

cursos.push('C++') // adicionar ao final
cursos.unshift('C#') // adiciona no inicio
cursos.shift() // tira do inicio
cursos.push('Python')
cursos.pop() // retira o ultimo elemento do array
//para adicionar no document precisa percorrer o array

cursos.map((el)=>{ //para cada elemento eu vou criar um p
    let p =  document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})
