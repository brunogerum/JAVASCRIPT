//some

//every

let nomes = ['Bruno', 'Carlos', 'Lucas'];

console.log(nomes.some(nome => nome === 'Bruno'));

nome=[
    {nome:'Bruno', idade: 18},
    {nome:'Lucas', idade: 21},
    {nome:'Maria', idade: 15}
];

console.log(nome.every(nome => nome.idade >= 18))

if(nome.every( nome=> nome.idade >=18)){
    console.log('todos sao maiores de 18')
} else {
    console.log('tem um menor de idade aqui')
}