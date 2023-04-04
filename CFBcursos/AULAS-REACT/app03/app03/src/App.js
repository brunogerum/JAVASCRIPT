import React,{useState} from 'react';
import './App.css';
import Led from './Led'

export default function App() {

const [cor, setCor] = useState(1)

const vermelho= {color:'#f00'}
const verde= {color:'#0f0'}
const azul= {color:'#00f'}

const retCor=(c)=>{
  if(c==1){
    return vermelho
  } else if(c==2){
    return verde
  }else{
    return azul
  }
}

const mudaCor=()=>{
 clearInterval(corMudando)
 setCor(cor+1)
  if(cor > 2) {
    setCor(1)
    
  }
  
}

const corMudando = setInterval(mudaCor,2000)

  const [log,setLog] = useState(false)



const msglogin=()=>{
  return 'Usuario Logado'
}
const msglogoff=()=>{
  return 'favor Logar'
}


const cumprimento=()=>{
const hora= new Date().getHours()
   if (hora>=0 && hora < 12){
    return <p>Bom dia</p>
  }else if (hora>=12 && hora < 18){
    return <p>Boa tarde</p>
}else{
  return <p>Boa Noite</p>
}
}



  return (
    <>
      <h1 style={retCor(cor)}>BRUNO</h1>
      <button onClick={()=>mudaCor()}>Muda Cor</button>

    {cumprimento()}
    <p>{log?msglogin():msglogoff()}</p>
    <button onClick={()=>setLog(!log)}>{log?'Deslogar':'Logar'}</button>

    

    </>
  );
}



























//APP LED
// export default function App() {

//   const [ligado,setLigado]=useState(false)
//   return (
//     <>
//     <Led ligado ={ligado} setLigado={setLigado}/>
//     </>
//   );
// }

