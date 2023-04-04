 const p_array = document.querySelector('#array')
 const btnReduzir = document.querySelector('#btnReduzir')
 const resultado = document.querySelector('#resultado')

 const elementos_array = [1,2,3,4,5]
 let antes = []
 let depois = []
 let dobro = []

  p_array.innerHTML = '[' + elementos_array + ']'

 btnReduzir.addEventListener('click', (evt)=>{
    dobro.push(elementos_array[0]*2)
    resultado.innerHTML = elementos_array.reduce((ant,atual,pos)=>{
        antes.push(ant)
        depois.push(atual)
        dobro.push(atual*2)
        return atual+ant
    })
    resultado.innerHTML += "<br/>Anterior: " + antes + "<br/>Atual: " + depois + "<br/>Dobro: " + dobro
 })


