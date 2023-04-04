import React,{useState,useEffect} from 'react';
import './App.css';
//use efffect é atualizado toda vez que a pagina é montada e atualizada
export default function App() {
  

  const [contagem,setContagem]=useState(0)


  useEffect(
    ()=>{
      document.title='Contagem: '+ contagem
      console.log('Pagina carregada')
  }
  )  
return(
  <>
    <p>Contagem: {contagem}</p>
    <button onClick={()=>setContagem(contagem+1)}>Contar</button>
  </>
)
}

