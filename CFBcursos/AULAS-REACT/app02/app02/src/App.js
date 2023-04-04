import React ,{useState}from "react" // para liberar o use state tem que bolocar no import
//import Relogio from './Relogio'
import Numero from './Numero'
import './App.css'

export default function App(){

  const[num,setNum]=useState(10)
  const[nomedoState,FuncaoQueVaiAlterar]=useState('Valor padrão')
   

  return(
    <>
      <p> Valor do state num em App: {num}</p>
      <Numero num={num} setNum={setNum}/>
      <p>Expressão em tag p mais o nome do state em colchetes {nomedoState}</p>
    </>
  )
}


//USADO PARA FAZER O RELOGIO
// export default function App() {

//   const textoDestaque={
//     color:'#00f',
//     fontSize:'3em'
//   }

//   return (
//    <>
//     <section className="caixa">
//       <Relogio/>
//       <h1 style={{color:'#f00', fontSize:'5em'}}>CFB Cursos</h1>
//       <h2 style={textoDestaque}>Curso de React</h2>
//       <p className="texto"> Mais informações sobre o curso</p>
//       <a href='https://www.google.com.br' target='_blank'>GOOGLE</a>
//     </section>
//    </>
   
//   )
// }


