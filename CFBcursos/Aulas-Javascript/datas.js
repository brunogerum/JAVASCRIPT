const data = new Date()
const div_data = document.getElementById('div_data')
const div_relogio = document.getElementById('div_relogio')
const btn_ativar = document.getElementById('btn_ativar')
const btn_parar = document.getElementById('btn_parar')
const tmp_alarme = document.getElementById('tmp_alarme')
const hora_alarme = document.getElementById('hora_alarme')
const timer = document.getElementById('timer')

let som_alarme = new Audio('som.mp3')
som_alarme.loop=-1

let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false

btn_ativar.addEventListener('click',()=>{
   ts_atual = Date.now()
   ts_alarme = ts_atual + (tmp_alarme.value*1000)
   alarme_ativado = true
   const dt_alarme = new Date (ts_alarme)
   hora_alarme.innerHTML = 'Hora do Alarme:' + dt_alarme.getHours()  + ':' + dt_alarme.getMinutes() + ':' + dt_alarme.getSeconds() 
})

btn_parar.addEventListener("click",()=>{
    alarme_ativado=false
    alarme_tocando=false
    hora_alarme.innerHTML = "Hora do Alarme"
    tmp_alarme.value = 0
    timer.classList.remove('alarme')
    som_alarme.pause();
    som_alarme.currentTime = 0;
})

console.log(data)
console.log(data.getDate())
//console.log(Date.now()) //Timestamp

let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia

let mes = data.getMonth()+1
mes = mes < 10 ? "0" + mes : mes

const data_r = dia +'/'+ mes +'/' + data.getFullYear()

div_data.innerHTML = data_r


const relogio=()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora
    let minuto = data.getMinutes()
    minuto = minuto < 10 ? "0" + minuto : minuto
    let segundo = data.getSeconds()
    segundo = segundo < 10 ? "0" + segundo : segundo
    const hora_completa = hora +':'+ minuto + ':'+ segundo
    div_relogio.innerHTML = hora_completa
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add('alarme')
        }
    }
}

const intervalo = setInterval(relogio,1000)

// getDate() = dia do mês
// getDay() = dia da semana  (número)
// getFullYear() = Ano com 4 digitos
// getHours() = Horas
// getMilliseconds() = milisegundos
// getMinutes() = minutos
// getMonth() = mês
// getSeconds() = segundos
// getTime() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
// Date.now() =  Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
// getTimezoneOffset() = timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() =  Define um ano para a data
// setHours() = Define Horas
// setMilliseconds() =  Define milisegundos
// setMinutes() = Define minutos
// setSeconds() =  Define segundos
// toDateString() = retorna somente a data
