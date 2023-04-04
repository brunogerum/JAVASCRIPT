/*for(let i=0; i <= 100; i++){
    if (i%2==0) {
        console.log(i + " é par")
    } else {
        console.log(i + " é impar")
    }
}*/

/*let num = [10, 20, 30, 40, 50]

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
    
}*/

//FOR IN farinha
const objs = document.getElementsByTagName("div")

let num = [10, 20, 30, 40, 50]

for(n in num){// para cada posição dentro da variavel, por padrao retorna a posição
    console.log(n)
}


//FOR OF Farofa
for(n of num){// valores dentro da variavel por padrao ja retorna o valor
    console.log(n)
}

for(o of objs){
    console.log(o)
    o.innerHTML="LINDO"
}
for(o in objs){
    console.log(o)
}