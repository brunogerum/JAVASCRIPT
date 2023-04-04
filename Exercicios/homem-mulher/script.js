function carregar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('result')
    if (fano.value.length == 0 || fano.value > ano) {alert('[ERRO] Verifique os Dados e tente novamente')
    }  else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { genero = 'um Homem'
            if (idade >= 0 && idade < 4) {
                img.setAttribute('src', 'meninobebe.jpeg')
                
            } else if ( idade >= 4 && idade < 14) {
                img.setAttribute('src', 'meninocriança.jpeg')
            }
            else if ( idade >= 14 && idade < 20) {
                img.setAttribute('src', 'jovemhomem.webp')
            }
            else if ( idade >= 20 && idade < 49) {
                img.setAttribute('src', 'adultohomem.jpeg')
            } else{
                img.setAttribute('src', 'idosohomem.webp')
            }
            
        } else if(fsex[1].checked){
            genero = 'uma Mulher'
            if (idade >= 0 && idade < 4) {
                img.setAttribute('src', 'bebemenina.jpeg')
                
            } else if ( idade >= 4 && idade < 14) {
                img.setAttribute('src', 'criançamenina.jpeg')
            }
            else if ( idade >= 14 && idade < 20) {
                img.setAttribute('src', 'jovemmulher.webp')
            }
            else if ( idade >= 20 && idade < 49) {
                img.setAttribute('src', 'adultamulher.jpeg')
            } else{
                img.setAttribute('src', 'idosamulher.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}