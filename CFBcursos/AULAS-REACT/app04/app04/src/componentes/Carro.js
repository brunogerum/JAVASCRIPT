import React from "react";

class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo='Golf'

        this.state={
            ligado : false,
            velAtual : 0,
        }
        this.ld = this.ligarDesligar.bind(this)
    }



    ligarDesligar(){
        //this.state.ligado = true
        //this.setState({ligado: !this.state.ligado})
        this.setState(
            (state)=>(
                
                {ligado:!state.ligado}
            )
        )

    }



    acelerar(){
        this.setState(
            (state,props)=>(
                {velAtual:state.velAtual + props.fator}
            )
            
        )
    }

    componentDidMount(){
        console.log('o carro foi criado')
    }
    componentDidUpdate(){
        console.log('o carro foi atualizado')
    }

    componentWillUnmount(){
        console.log('o carro foi removido')
    }

    render(){
        return(
            <>
                <h1> Meu carro: </h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado? 'Sim': 'Não'}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={this.ld/*()=>this.ligarDesligar()*/}>
                    {this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}</button>

                    <button onClick={()=>this.acelerar()}>
                    Acelerar</button>
            </>
        )
    }
}

export default Carro