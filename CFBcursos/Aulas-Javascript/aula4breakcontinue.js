let n = 0
let max = 1000
let pares = 0

/*while(n<max){
    console.log('iteração ' + n)
    if(n > 10){ 
        break
    }
    n++
}*/



for(let i = n; i < max; i++){
   // console.log('iteração ' + i)
    if(i%2 != 0){
        continue
    }
    pares++
}
console.log(`Quantidade de pares: ${pares} `)
console.log('fim')
