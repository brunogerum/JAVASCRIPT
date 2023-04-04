const cursos = [...document.querySelectorAll('.curso')]

// const msg=()=>{
//     alert('clicou')
// }
//c1.addEventListener('click',msg) // parece com o onclick ele verifica eventos e depois colocamos o que ocorre

// c1.addEventListener('click',()=>{
//     alert('clicou') //msg() 
// }) // podemos utilizar função anonima tambem

cursos.map((e)=>{
    e.addEventListener("click",(evento)=>{
        const event = evento.target
        
        event.classList.add('destaque')
       
    })
})

    
// c1.addEventListener('click',(evt)=>{
//     //console.log(evt.target)
//     const el= evt.target//o .target pega o elemento que disparou o event
//     el.classList.add('destaque') //o classList.add adiciona uma classe a variavel antes do ponto
// })