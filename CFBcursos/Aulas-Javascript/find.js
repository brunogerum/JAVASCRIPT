 const p_array = document.querySelector('#array')
 const btnVerificar = document.querySelector('#btnVerificar')
 const resultado = document.querySelector('#resultado')

 const elementos_array = [21,25,19,13,20,18,22]
 //const elemento_Array = ['HTML', 'CSS', "Javascript", "ReactNative", 'PHP', 'React']

 p_array.innerHTML = '[' + elementos_array + ']'

 btnVerificar.addEventListener('click', (evt)=>{
   
    const ret = elementos_array.some/*every*/((e,i)=>{ // every funciona só se todos os elementos, coincidam com a especificação
        if (e > 18){
            resultado.innerHTML = 'Array não conforme na posição ' + i
        }
        return e<=18
    })
    if(ret){
        resultado.innerHTML = 'OK'
    }
    //console.log(ret)
 })

//  p_array.innerHTML = '[' + elemento_Array + ']'

//  btnPesquisar.addEventListener('click', (evt)=>{
//     resultado.innerHTML = 'Valor não encontrado'
//     const ret = elemento_Array.find((e,i)=>{
//         if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){
//             resultado.innerHTML = ' Valor encontrado '+ e +  ' na posição '+ i
//             return e
//         }  
//     })
//     console.log(ret)
//  })