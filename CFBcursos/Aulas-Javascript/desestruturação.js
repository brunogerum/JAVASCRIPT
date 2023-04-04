// let a1,b1,c1,d1

// [a1,b1=0,c1=0,d1=0] = [10]

let numeros =[10,20,30,40]

let [a,b,c,d] = numeros



//({a,b,c,d}={a:'verde', b:'azul', c:'rosa', d:'preto'})

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log('-------------')

let a1,b1,c1,d1

[a1,b1=0,c1=0,d1=0] = [10]

console.log(a1)
console.log(b1)
console.log(c1)
console.log(d1)
console.log('-------------')

let a2 = 10;
let b2 = 20;
[a2,b2] = [b2,a2]

console.log(a2)
console.log(b2)
console.log('-------------')
let numero=()=>{
    return[10,20,30,40]
}

let[a3,b3,c3,d3] = numero()

//console.log(numero())

console.log(a3)
console.log(b3)
console.log(c3)
console.log(d3)
console.log('-------------')

let num = [10,20,30,40,50,60,70,80,90]

let [a4,b4,c4,...d4] = num

console.log(a4)
console.log(b4)
console.log(c4)
console.log(d4)

let obj = {nome:'Bruno',curso:'React'}

let{nome,curso} = obj

console.log(nome)
console.log(curso)

const cores=()=>{
    return ["verde","amarelo","azul","branco"]
}
let[cor1,cor2,,cor3]=cores()
console.log(cor1)
console.log(cor2)
console.log(cor3)

let texto="curso de Javascript"
console.log(texto.split(" "))//divide no espaço
let [t1,t2t,t3]=texto.split(" ")
console.log(t1)
