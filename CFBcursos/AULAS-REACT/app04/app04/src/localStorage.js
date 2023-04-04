import React,{useState} from 'react';
import './App.css';
//armazenamento local do browser
//para criar uma chave localStorage.setItem
//para recuperar a chave usar localAStorage.getItem e falar o noeme da chave
//e para remover usar o .removeitem
//localStorage.setItem('nome','Bruno')
  // //se nao existir o setItem cria, se exisitr ele muda
  // localStorage.setItem('nome','Théo')
  // localStorage.getItem('nome')
  // localStorage.removeItem('nome')
export default function App() {

  const [nome,setNome] =useState()

  const Armazenar = (chave,valor)=>{
    localStorage.setItem(chave,valor)
  }
  
  const Apagar = (chave)=>{
    localStorage.removeItem(chave)
  }

 const Consultar = (chave)=>{
  alert(localStorage.getItem(chave))
 }

return(
  <>
    <label>Digite um nome: </label><br/>
    <input type='text' value={nome} onChange={(e)=>setNome(e.target.value)}/><br/><br/>
    <button onClick={()=>Armazenar('ls_nome',nome)}>Gravar Nome</button><br/>
    <button onClick={()=>Consultar('ls_nome')}>Consultar Nome</button><br/>
    <button onClick={()=>Apagar('ls_nome')}>Apagar Nome</button>
  </>
)
}


