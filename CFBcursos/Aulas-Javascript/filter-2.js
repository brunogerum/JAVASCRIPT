const caixaCursos = document.querySelector('#caixaCursos')
const cursos = ['HTML','CSS','Javascript','PHP','React','MySQL','ReactNative']
const btnCursosSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovorCursoAntes = document.getElementById('btnAdicionarNovorCursoAntes')
const btnAdicionarNovorCursoDepois = document.getElementById('btnAdicionarNovorCursoDepois')
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0

const tirarSelecao = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso = (curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+ indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML= curso
       
    novoElemento.addEventListener('click',(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
        
    })


    indice++
    
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    
})

const cursoSelecionado = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]

}


btnCursosSelecionado.addEventListener('click',(evt)=>{

    if(cursoSelecionado()!=undefined){
        alert('Curso selecionado: ' +  cursoSelecionado().innerHTML)
    }else{
        alert('Selecione um Curso')
    }

})

btnRemoverCurso.addEventListener('click',(evt)=>{

    const cs = cursoSelecionado()
    try{
        cs.remove()
    }catch(ex){alert('Selecione um Curso')}
    
})


btnAdicionarNovorCursoAntes.addEventListener('click',(evt)=>{

    try{
        if (nomeCurso.value!='') {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado()) 
        } else{
            alert('Dê um nome para o novo curso!')   
        }
    }catch{
        alert('Selecione um Curso')
    }

})

btnAdicionarNovorCursoDepois.addEventListener('click',(evt)=>{

    
    try{
        if (nomeCurso.value!='') {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling) 
        } else{
            alert('Dê um nome para o novo curso!')
        }
       
    }catch{
            alert('Selecione um Curso')
        }


})