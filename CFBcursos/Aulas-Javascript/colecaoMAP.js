// coleção chave - valor --- sempre adicionar

//coleção MAP é diferente do metodo map

let mapa = new Map()

mapa.set("curso","Javascript")
mapa.set(10,"Cursinho")
mapa.set(100,11)
mapa.set('mapa',77)

mapa.delete(100)

console.log(mapa)

let pes = 10
let res =""

if(mapa.has(pes)){
    res = "a chave existe na coleção "+ "valor: " + mapa.get(pes)
    
}else{
    res = ' a chave não existe'
}
res += '<br/> o tamano da coleção é ' + mapa.size
caixa.innerHTML = res

mapa.forEach((el)=>{
    console.log(el)
})