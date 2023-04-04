const btn_alert=document.getElementById('btn_alert')
const btn_confirm=document.getElementById('btn_confirm')
const btn_prompt=document.getElementById('btn_prompt')

btn_alert.addEventListener('click',(evt)=>{
    alert('Boa tarde!')
})

btn_confirm.addEventListener('click',(evt)=>{
    const retorno=confirm('Voce esta aprendendo Javascript?')
    if(retorno){
        alert('Parabéns!, continue assim!')
    } else{
        alert('continue estudando que você vai chegar lá!')
    }
})

btn_prompt.addEventListener('click',(evt)=>{
   const nome = prompt('digite seu nome', 'Digite aqui')
  
   if(nome=null){
   
        alert(`Seu nome é ${nome}`)
   }else{while(nome==null){prompt('digite seu nome')
    
   }}
   console.log(nome)
})
