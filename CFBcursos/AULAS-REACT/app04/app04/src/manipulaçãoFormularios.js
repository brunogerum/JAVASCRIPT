import React,{useState} from 'react';
import './App.css';

export default function App() {

  const [nome,setNome]= useState('')
  const [carro,setCarro] = useState('')
  const handleChangeNome=(e)=>{
    setNome(e.target.value)
  }
  
  return (
    <>
      <label name='fname'>Digite seu Nome: </label>
      <input type='text' name='fname'
      value={nome}
      // onChange={(e)=>setNome(e.target.value)}
      onChange={(e)=>handleChangeNome(e)}
      />
      <p>Nome digitado: {nome} </p>
      <label>Selecione um Carro: </label>
      <select value={carro} onChange={(c)=>setCarro(c.target.value)}>
        <option value='Palio'>Palio</option>
        <option value='Uno'>Uno</option>
        <option value='Corsa'>Corsa</option>
        <option value='Celta'>Celta</option>
        <option value='Gol'>Gol</option>
      </select>
      <p>Carro selecionado: {carro}</p>
    </>
  );
}

