const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')
const botao = document.getElementById('copy')
const botao2 = document.getElementById('voltar')
const todosCursos=[...document.getElementsByClassName('curso')] // nao esquecer o ... spread senao ele noa percorre o array

//loop para percorrer essa seleção
todosCursos.map((el)=>{    //()=>{} isso significa função anonima = variavel e comando
    el.addEventListener("click",(evento)=>{
        const curso = evento.target
        curso.classList.toggle("selecionado")// toggle verifica se o elemento tem a classe relecionada e remove, se nao tem ele adiciona *****muito importante
    }) //cara cada elemento vou adicionar uam funcionalidade
})

botao.addEventListener('click',()=>{
    const cursoSelec = [...document.querySelectorAll('.selecionado')]
    cursoSelec.map((e)=>{        //percorrer o arrey inteiro
        caixa2.appendChild(e) 
        e.classList.toggle("selecionado")
        //appendchild é anexar ao filho, ao elemento caixa 2
        
    })    
    
}) //pegar os elementos que tem a classe selecionada e adicionar no conteiner caixa 2

botao2.addEventListener('click',()=>{
    const cursoVolta = [...document.querySelectorAll('.selecionado')]
    cursoVolta.map((ei)=>{        
        caixa1.appendChild(ei)
        ei.classList.toggle("selecionado")           
    
    })    
      
})