//let nome = 'Bruno'
let nome = new String('Bruno ')
let nome2 = new String('Bruno ')
let nomeMeio = new String('Marcelo ')
let sobrenome = new String('Gerum')
console.log(nome, typeof(nome))

console.log(nome.charAt(0)) //retorna o caractere na posição

console.log(nome.charCodeAt(0)) // retorna o codigo do caractere

console.log(nome.concat(nomeMeio, sobrenome))// pega o conteudo de uma string e juntar com a outra

nome = nome.concat(nomeMeio, sobrenome)

//console.log(nome)

console.log(nome.indexOf('r')) //procura pelo caractere q eu indicar e indica a posição. se aparecer -1 é pq o caractere n existe 

console.log(nome.lastIndexOf('o'))

console.log(nome.localeCompare(nome2))// comparação de 2 strings

console.log(nome.replace('Marcelo','Martelo')) //substitui o caractere

console.log(nome.search('Gerum'))// ele pesquisa e retorna a posição da 1 letra achada

console.log(nome.slice(6,13)) //corta a string a partir na posição indica no inicio e final e retorna a parte cortada


let arr_nome = nome.split(' ')//retorna um array no ponto indicado da divisão

console.log(arr_nome)


let parte1 = nome.substring(0,4) //não inclui a posição, só vai ate aquela posição
console.log(parte1)

let parte2 = nome.substr(6,7)// a partir da primeira posição indicada, ele conta quantos caracteres apos a ,
console.log(parte2)

let nome3=nome.toUpperCase()
console.log(nome3)

console.log(nome3.toLocaleLowerCase())

console.log(nome.valueOf())

let num=10
console.log(typeof(num.toString()))


console.log(nome.startsWith('Bru'))//verifica se ela começa com o indicado

console.log(nome.endsWith('rum')) //mesma ideia do startswith

console.log(nome.includes('celo')) //pesquisa no meio da string para ver se tem 

console.log(nome.repeat(5))// dizer quantas vezes quer repitir a string

console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))
console.log(nome.charCodeAt(4))

console.log(String.fromCodePoint(66,114,117,110,111))