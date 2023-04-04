const caixaCursos = document.querySelector('#caixaCursos')
const cursos = ['HTML','CSS','Javascript','PHP','React','MySQL','ReactNative']
const btnCursosSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovorCursoAntes = document.getElementById('btnAdicionarNovorCursoAntes')
const btnAdicionarNovorCursoDepois = document.getElementById('btnAdicionarNovorCursoDepois')
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0

const criarNovoCurso = (curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+(indice+1))
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML= curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class','comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    indice++
    
    return novoElemento

    
}

cursos.map((el,chave)=>{
    //comentando pq vai pra dentro do criarNovoCurso
    // const novoElemento = document.createElement('div')
    // novoElemento.setAttribute('id','c'+(chave+1))
    // novoElemento.setAttribute('class','curso c1')
    // novoElemento.innerHTML= el

    // const comandos = document.createElement('div')
    // comandos.setAttribute('class','comandos')

    // const rb = document.createElement('input')
    // rb.setAttribute('type','radio')
    // rb.setAttribute('name','rb_curso')

    // comandos.appendChild(rb)

    // novoElemento.appendChild(comandos)

    // caixaCursos.appendChild(novoElemento)
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    
})

const radioSelecionado = (ele)=>{
    const todosRadios =[...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado = todosRadios.filter((ele,ind,arr)=>{ //retorna um array
        return ele.checked
    })
    return radioSelecionado[0]

}


//ESTOU COMENTANDO SÓ PRA VER COMO QUE FAZ, MAS COMO SAO VARIOS COMANDOS MELHOR FAZER OUTRA FUNÇÃO

btnCursosSelecionado.addEventListener('click',(evt)=>{

const rs = radioSelecionado()

    // const todosRadios =[...document.querySelectorAll('input[type=radio]')]
    // let radioSelecionado = todosRadios.filter((ele,ind,arr)=>{ //retorna um array
    //     return ele.checked
    // })
    // radioSelecionado = radioSelecionado[0] // para retorna um unico elemento mudar para let e colocar na posição 0, e sempre vai ser 0 pq só pode ter 1 checked
    
    //const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
    if(rs!=undefined){
    const cursoSelecionado = rs.parentNode.previousSibling.textContent
    alert('Curso selecionado: ' + cursoSelecionado)
    }else{
        alert('Selecione um Curso')
    }
    // console.log(todosRadios)
    // console.log(radioSelecionado)
    // console.log(cursoSelecionado)
})

btnRemoverCurso.addEventListener('click',(evt)=>{

    const rs = radioSelecionado()
    try{const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    }catch(ex){alert('Selecione um Curso')}
    
})

//usar o try e catch no lugar do if -- ele vai tentar o comando do try, se der errado eel faz o comando do catch

btnAdicionarNovorCursoAntes.addEventListener('click',(evt)=>{

    const rs = radioSelecionado()
    if(rs!=undefined){
        if (nomeCurso.value!='') {
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)// tem que botar o value para pegaro valor de dentro, senao ele so testa se tem ou nao
            caixaCursos.insertBefore(novoCurso,cursoSelecionado) // inserir o novo curso antes da virgula e depois da virgula antes de qual elemento
        } else{
            alert('Dê um nome para o novo curso!')   
        }
    }else{
        alert('Selecione um Curso')
    }

})

btnAdicionarNovorCursoDepois.addEventListener('click',(evt)=>{

    const rs = radioSelecionado()
    if(rs!=undefined){
        if (nomeCurso.value!='') {
           const cursoSelecionado = rs.parentNode.parentNode.nextSibling
            const novoCurso = criarNovoCurso(nomeCurso.value)// tem que botar o value para pegaro valor de dentro, senao ele so testa se tem ou nao
            caixaCursos.insertBefore(novoCurso,cursoSelecionado) // inserir o novo curso antes da virgula e depois da virgula antes de qual elemento  
        } else{
            alert('Dê um nome para o novo curso!')
        }
       
    }else{
            alert('Selecione um Curso')
        }


})