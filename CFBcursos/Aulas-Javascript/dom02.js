const divTodas = [...document.getElementsByTagName('div')]
const cursosTodos = [...document.getElementsByClassName('curso')]
const cursosC1 = [...document.getElementsByClassName('c1')]
const cursosC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial=document.getElementsByClassName('curso')[6]//ao colocar colchetes e o numero, a gente escolhe 1 dos elementos desse class

const query_divTodas = document.querySelector('div') // retorna o somente o primeiro elemento da tag que encontrar
console.log(query_divTodas)

const queryall_divTodas =[...document.querySelectorAll('div, p')]

const query_divTodos =[...document.querySelectorAll('div[class]')] // para pegar as divs que só tem o atributo class

const query_cursos = [...document.querySelectorAll('.curso')] // usa o ponto para indicar classes e # para indicar id

console.log(query_cursos)

console.log(queryall_divTodas) // pega todos os elementos da tag

console.log(query_divTodos)


const query_divp = [...document.querySelectorAll('div > p')]
console.log(query_divp)







// console.log(divTodas)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)

// cursosC2.map((el)=>{
//     el.classList.add('destaque') //class list seleciona a classe e add adiciona 
// })