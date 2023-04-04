function carregar(){
    
   var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    
    var horas = agora.getHours()

      
    
    var corpo = document.body
    
    
    msg.innerHTML = `agora são ${horas} horas!`
    if (horas >=0 && horas < 12) {

        corpo.style.background = 'lightblue'
        img.src = '93484304.webp'

    } else if (horas >=12 && horas < 18){

        corpo.style.background = '#c7757598'       
        img.src = 'sol-2.webp'
        
    } else{
        corpo.style.background = '#8a664998'
        img.src = 'noite6.webp'
    }
}