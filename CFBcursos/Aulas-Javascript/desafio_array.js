const valor1 = document.querySelector('#txvalor1')
const valor2 = document.querySelector('#txvalor2')
const res =  document.querySelector('#txres')
const soma = document.querySelector('#soma')
const sub = document.querySelector('#sub')
const mult = document.querySelector('#mult')
const div = document.querySelector('#div')

const op = [
    ()=>{
        const val = [valor1.value,valor2.value]
        res.value=(Number(val[0]))+Number((val[1]))
    },
    ()=>{
        const val = [valor1.value,valor2.value]
        res.value=(val[0])-(val[1])
        return res
    },
    ()=>{
        const val = [valor1.value,valor2.value]
        res.value=(val[0])*(val[1])
    },()=>{
        const val = [valor1.value,valor2.value]
        res.value=(val[0])/(val[1])
    }
]

soma.addEventListener('click',()=>{op[0]()})
sub.addEventListener('click',()=>{op[1]()})
mult.addEventListener('click',op[2])
div.addEventListener('click',op[3])