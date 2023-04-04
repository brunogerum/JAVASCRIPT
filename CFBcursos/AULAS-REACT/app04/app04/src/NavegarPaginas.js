import React,{useState, useEffect} from 'react';
import './App.css';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';

export default function App() {

const [pagina,setPagina]=useState(0)

const trocaPaginas=(p)=>{
  if(p==1){
    window.open('http://localhost:3000?1', '_self')
  } else if(p==2){
    window.open('http://localhost:3000?2', '_self')
  }
}

useEffect(
  ()=>{
    const url=window.location.href
    const res=url.split('?')
    setPagina(res[1])
  }
)


const retornarPagina=()=>{
  if(pagina==1){
  return <Pagina1/>
  } else if( pagina==2){
  return <Pagina2/>
}else{ 
  return <div>
          <button onClick={()=>trocaPaginas(1)}>Pagina 1</button>
          <button onClick={()=>trocaPaginas(2)}>Pagina 2</button>
        </div>
}
}

return(
  <>
    {retornarPagina()}
  </>
);
}


