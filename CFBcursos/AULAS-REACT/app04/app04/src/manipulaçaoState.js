import React,{useState} from 'react';
import './App.css';

export default function App() {

  const [form,setForm]=useState({'nome':'','curso':'','ano':''})

  const handleChanceForm=(e)=>{
      // no currentTarget.name vem: fnome, fcurso e fano dai tira a primeira letra
      setForm({...form,[e.currentTarget.name.substr(1)]: e.currentTarget.value})
  }

  
return(
  <>
      <label>Nome: </label>
      <input type='text' name='fnome' value={form.nome} onChange={(e)=>handleChanceForm(e)}/>
      <br/>
      <label>Curso: </label>
      <input type='text' name='fcurso' value={form.curso} onChange={(e)=>handleChanceForm(e)}/>
      <br/>
      <label>Ano: </label>
      <input type='text' name='fano' value={form.ano} onChange={(e)=>handleChanceForm(e)}/>

      <div>
          <p>Nome digitado: {form.nome}</p>
          <p>Curso digitado: {form.curso}</p>
          <p>Ano digitado: {form.ano}</p>
      </div> 
  </>
)
}