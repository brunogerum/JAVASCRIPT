function canal() {
    let n1 = 10
    let n2 = 2
    let res = n1 * n2
    if(res%2 == 0)
        return 'Par'
    else
        return "Impar"
    
}

let resto = canal()

console.log(resto)







let valor = 0
console.log(valor)
function add(v) {
   return valor + v
}
valor=add(10)
console.log(valor)
valor=add(14)
console.log(valor)









function soma(n1=0,n2=0) {
    let res
    res = n1 + n2
    return res
}
let result = soma(10,7)
console.log(result)