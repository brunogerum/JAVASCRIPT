function soma(...valores){//parametro rest = espalha os valores do array usando o spread
    let tam = valores.length
    let res = 0
    for(let v of valores)// for (let i = 0; i > valores.length;i++){ valores.lenght ou tam, tanto faz
        res += v //com for of nao precisa digitar valores[v] pq o v ja é o valor dentro do array
    
    return res
}

console.log(soma(10 ,5 ,2 ,15, 8))


const f = function(v1,v2){
    return v1 + v2
}

console.log(f(10,5))

const t = function(...valores){
    let rest = 0
    for(c of valores){
    rest += c
    }
    return rest
}

console.log(t(10,1,2))

const v = new Function("v1","v2", "v3", "return v1+v2+v3")

console.log(v(5,3,2))