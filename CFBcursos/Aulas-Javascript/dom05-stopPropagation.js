const caixa1 = document.querySelector('#caixa1')
const btn_c1 =[...document.querySelectorAll('.curso')]//tem que fazer o spread pra transformar nu, array, senao nao dá certo.

caixa1.addEventListener('click',(evento)=>{
    console.log('clicou')

}) // evento de clique

btn_c1.map((el)=>{
    /*btn_c1*/el.addEventListener('click',(evento)=>{
        evento.stopPropagation()
        
    
    }) 
})
