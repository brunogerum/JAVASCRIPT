const soma = (...valores) => {
    const somar = val =>{
        let res = 0
        for (v of val){
            res+=v
        }
        return res
    }
    return somar(valores)
}

console.log(soma(10, 5 ,15))

//usa assim ou assado

const sm = bal =>{
    let rest = 0
    for (b of bal){
        rest+=b
    }
    return rest
}

const som = (...vals) => {
        
    return sm(vals)
}
console.log(som(10, 5 ,15))
valor = [10, 5 ,15]
console.log(som(...valor))