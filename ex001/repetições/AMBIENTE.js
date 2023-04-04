var num = [5, 2, 8, 9, 3, 6, 7]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(num[1])

var pos = num.indexOf(5)
console.log(`o valor esta na posição ${pos}`)

var pos = num.indexOf(4)

if (pos == -1) { console.log('o valor não foi encontrado')
    
} else {
    console.log(`o valor esta na posição ${pos}`)
}
