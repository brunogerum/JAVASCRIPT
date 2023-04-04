

function contar() {
var inicio = document.getElementById('txin')
var fim = document.getElementById('txfim')
var passo = document.getElementById('txpasso')
var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //alert('[ERRO] FALTAM DADOS')
   
        
    } else { res.innerHTML = 'Contando...'
        var ini = Number(inicio.value)
        var final = Number(fim.value)
        var pas = Number(passo.value)
        if( pas <= 0) {
            alert('passo invalido, considerando passo 1')
            pas = 1
        }
    
        if(ini<final) {
            //contagem crescente
            for (var cont = ini; cont <= final; cont += pas) {
                res.innerHTML += `${cont} \u{1F449} `
            }
           
        } else {
            //contagem regressiva
            for( var cont = ini; cont >= final; cont -= pas) {
                res.innerHTML += `${cont} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}