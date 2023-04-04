class CarroPadrao{
    constructor(){
        if(this.constructor===CarroPadrao){ // torna classe abstrata ao mandar errro caso use
            throw new TypeError('Esta classe não pode ser instanciada')
        }
        if(this.ligar===undefined){
            throw new TypeError('É obrigatório implementar o metodo ligar')
        }
        if(this.desligar===undefined){
            throw new TypeError('É obrigatório implementar o metodo desligar')
        }
        this.rodas=4
        this.portas=4
        this.ligado=false
    }
}

class Carro extends CarroPadrao{
    constructor(tipo,estagioTurbo){
        super()
        this.turbo= new Turbo (estagioTurbo)
        if(tipo==0){
            this.velMax=100
            this.nome='normal'
        }else if(tipo==1){
            this.velMax=120
            this.nome='luxo'
        }else if(tipo==2){
            this.velMax=160
            this.nome='esportivo'
        }else if(tipo==3){
            this.velMax=200
            this.nome='super esportivo'
        }
        this.velMax += this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.rodas)
        console.log(this.portas)
        console.log((this.ligado?'ligado':'desligado'))
        console.log('-----------------')
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
}

class Turbo{
    constructor(e){
        if(e==0){
            this.pot=0
        }else if(e==1){
            this.pot=50
        }else if(e==2){
            this.pot=75
        }else if(e==3){
            this.pot=100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo) //chama o pai
        this.velMax=300 + this.turbo.pot
        this.nome='carro especial'
    }
    info(){//poliformismo função com mesmo nome que desempenham papeis diferentes
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade Máxima: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo.pot}`)
        console.log('-----------------')
}
}

const c1 = new Carro(0,0)
const c2 = new Carro(1,1)
const c3 = new Carro(3,3)
const c4 = new CarroEspecial (3)
//const c5 = new CarroPadrao ()

c1.info()
c2.info()
c3.info()
c4.info()
