const caixa1 = document.querySelector('#caixa1')
const btn_c1 = [...document.querySelectorAll('.curso')]

// console.log(caixa1.children[caixa1.children.length-1]) // o paramentro lenth da o numero total de elementos no array
// // retangulo é propriedade  e é azule nao precisa do (), quadrado é metodo

// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)

// console.log(document.getRootNode()) // quadrado é metodo é amarelo e precisa do ()

// console.log(btn_c1[0].getRootNode())

// console.log(btn_c1[0].ownerDocument)

console.log(caixa1.hasChildNodes())
console.log(btn_c1[0].hasChildNodes())


console.log(btn_c1[0].children.length > 0 ? 'Possui filhos' : 'Não Possui filhos')

// if(btn_c1[0].children.length > 0){console.log('tem filho')}
// else{
//    console.log('nao tem filho')
// }

console.log(caixa1.children[1].innerHTML='TESTE')

const c1_2 = document.querySelector('#c1_2')

console.log(c1_2.parentElement)

console.log(c1_2.parentNode.parentNode)

