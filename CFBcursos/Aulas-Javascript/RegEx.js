let nome = new String('Bruno Marcelo Gerum 1990')
let email = 'bruno.sedec@gmail.com'
let numeros = '1, 10 , 100, 1000'

console.log(nome)

console.log(nome.search(/marcelo/i)) 

// entre barra /---/ coloca em regex - que muda o comportamento das funções - modificadores
//i significa que nao vai uasr o case sensitive

console.log(nome.match(/O/ig))
//g -- significa global, busca todos os caracteres

console.log(nome.replace(/O/ig, 'u'))

console.log(nome.match(/[oe]/ig))

console.log(nome.match(/[a-m|0-9]/ig))

//o traço - siginifica até, é um intervalo
// o | utilizado como ou em alguma vezes é usando como 'tambem' em regex

//METACARACTERES
console.log(nome.match(/\d/ig))
console.log(nome.match(/\s/ig))
console.log(nome.match(/\bM/ig))

//\d siginica que sao os numeros
//\s siginica que sao os espaços
//\b siginica que sao os letras


// QUANTIFICADORES

console.log(nome.match(/O+|m+/ig))
// ao colocar o mais ele busca por string que tenha os os consecutivos para uma ocorrencia só

console.log(numeros.match(/10/ig))

console.log(numeros.match(/10+/ig))
// com o + ele reetorna a senteça toda que contem


console.log(numeros.match(/10*/ig))
// o asterisco corresponde a 0 ou pelo menos 1 string que corresponda no exemplo, ele retorna o 10 e tbm o 1 pq foi o primeiro caractere na sentença toda

console.log(numeros.match(/10?/ig))
// o ? so retorna o valor de 1 caractere ou o 10 mas ignora o resto da sentença