const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const posx = document.getElementById('posx')
const posy = document.getElementById('posy')
const largura = document.getElementById('largura')
const altura = document.getElementById('altura')

let DomRect_q1 = q1.getBoundingClientRect()

q1.accessKey='b'
q2.accessKey='n'

const info=(el)=>{

    let DomRect_q = el.getBoundingClientRect()
    posx.innerHTML=`posx: ${DomRect_q.x}`
    posy.innerHTML=`posy: ${DomRect_q.y}`
    largura.innerHTML=`largura: ${DomRect_q.width}`
    altura.innerHTML=`altura: ${DomRect_q.height}`
}

q1.addEventListener('click',(evt)=>{
    info(evt.target)
})

q2.addEventListener('click',(evt)=>{
    info(evt.target)
})