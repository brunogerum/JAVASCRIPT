var num = document.getElementById('txnum')
    var lista = document.getElementById('ilista')
    var res = document.getElementById('res')
    var valores = []
    
function adicionar() {
    
    numero = Number(num.value)    
    
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else if (numero > 100 || numero < 1) {
        alert('Por favor, digite um número valido entre 1 e 100!')
    } else if (valores.indexOf(Number(num.value)) != -1){         
        alert('numero já adicionado')       
    }
    else{ 
        valores.push(Number(num.value))
        let item = document.createElement('option')
            item.text= `valor ${num.value} adicionado`
            lista.appendChild(item)
            num.value = ''
            num.focus()
               
    }
    

}
function finalizar(){

    if (valores.length == 0) {
        alert('Preencha os dados e tente novamente')
    } else {
        let soma = 0
        let maior = valores[0]
        let menor = valores[0]
    for (let pos in valores){
        soma += valores[pos]
        if (valores[pos] > maior)
       maior = valores[pos]
        if (valores[pos] < menor)
        menor = valores[pos]
    
    }
        
    res.innerHTML = `<p> Ao todo temos ${valores.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior/*valores[valores.length-1]*/}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor/*valores[0]*/}</p>`
    
     res.innerHTML += `<p> A soma de todos os valores  é de  ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${soma/valores.length}</p>`
}}


/*lista.innerHTML = ''
m*/