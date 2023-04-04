// const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']
// cursos.map((el,i) => {
//     console.log(` Curso: ${el} - posição do curso: ${i}`)
// }) // for a gente usa quando nao precisa correr a coleção toda. o map serve pra percorrer a coleção toda

// let c = cursos.map((el,i) => {
//     return el
// })

// console.log(c)





// let el = document.getElementsByTagName("div")
// el = [...el]
// console.log(el)
// el.map((e,i)=>{
//     // console.log(e)    // voltar ele com as divs
//     //console.log(e.innerHTML) // voltar os valores de html dentro da div
//     e.innerHTML = "Estudos do Bruno"
// })





// const el = document.getElementsByTagName('div')
// const valores = Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(valores)



const converterInt=(e)=>parseInt(e) // =() recebe o valor => joga na function e retorna a nova função
const dobrar = (e) => e*2
let num = ['1', '2', '3', '4', '5'].map(converterInt)
console.log(num)

let numero = ['1', '2', '3', '4', '5'].map(dobrar)

console.log(numero)