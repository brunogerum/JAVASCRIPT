import React,{useState} from 'react';
import './App.css';
import Globais from './Globais';
import Info from './Info';


export default function App() {

const [nome,setNome] = useState(Globais.nome)

const gravarNome=()=>{
  Globais.nome=nome;
}

const verNome=()=>{
  alert(Globais.nome)
}

return(
  <>
    <Info/>
    <p>{'Canal: '+ Globais.canal}</p>
    <p>{'Curso: '+ Globais.curso}</p>
    <p>{'nome: '+ Globais.nome}</p>
    <hr/>
    <input type='text' size='50' value={nome} onChange={(e)=>setNome(e.target.value)}/>
    <br/>
    <button onClick={()=>gravarNome()}>Gravar Nome</button>
    <button onClick={()=>verNome()}>Ver Nome</button>
  </>
);
}


