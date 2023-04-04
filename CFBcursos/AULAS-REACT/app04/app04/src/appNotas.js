import React,{useState} from 'react';
import './App.css';
import Nota from './componentes/Nota'
import Resultado from './componentes/Resultado'


export default function App() {

const [notas,setNotas] = useState({'nota1':'0','nota2':'0', 'nota3':'0', 'nota4':'0'})

const handleSetNotas=(e)=>{
  if(e.target.getAttribute('name')=='nota1'){
    setNotas({'nota1': e.target.value,'nota2':notas.nota2, 'nota3':notas.nota3, 'nota4':notas.nota4})
  } else if(e.target.getAttribute('name')=='nota2'){
    setNotas({'nota1': notas.nota1,'nota2':e.target.value, 'nota3':notas.nota3, 'nota4':notas.nota4})
  }else if(e.target.getAttribute('name')=='nota3'){
    setNotas({'nota1': notas.nota1,'nota2':notas.nota2, 'nota3':e.target.value, 'nota4':notas.nota4})
  }else if(e.target.getAttribute('name')=='nota4'){
    setNotas({'nota1': notas.nota1,'nota2':notas.nota2, 'nota3':notas.nota3, 'nota4':e.target.value})
  }
}

  
return(
  <>
    <Nota num={1} nome= {'nota1'} nota={notas.nota1} setNota={handleSetNotas}/>
    <Nota num={2} nome= {'nota2'} nota={notas.nota2} setNota={handleSetNotas}/>
    <Nota num={3} nome= {'nota3'} nota={notas.nota3} setNota={handleSetNotas}/>
    <Nota num={4} nome= {'nota4'} nota={notas.nota4} setNota={handleSetNotas}/>
    <Resultado somaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>
  </>
)
}




// export default function App() {

// const [nota1,setNota1] = useState(0)
// const [nota2,setNota2] = useState(0)
// const [nota3,setNota3] = useState(0)
// const [nota4,setNota4] = useState(0)
  
// return(
//   <>
//     <Nota num={1} nota={nota1} setNota={setNota1}/>
//     <Nota num={2} nota={nota2} setNota={setNota2}/>
//     <Nota num={3} nota={nota3} setNota={setNota3}/>
//     <Nota num={4} nota={nota4} setNota={setNota4}/>
//     <Resultado somaNotas={parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)}/>
//   </>
// )
// }

