const url=document.getElementById('url')
const btn_url=document.getElementById('btn_url')

btn_url.addEventListener('click',(evt)=>{
    //window.location='https://www.google.com.br'
    //window.location.replace('https://www.google.com.br') //Deleta a url corrente do historico
    //window.location.assign('https://www.google.com.br') // não deleta a url corrente do historico
    //window.location.reload() //recarregar a pagina
    //window.history.forward()
   // window.history.go(1)
   // console.log(window.history.length)
    window.location =url.value
    //console.log(url.value)

})