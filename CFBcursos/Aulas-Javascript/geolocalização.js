const long = document.getElementById("long")
const lati = document.getElementById("lati")

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostraLocalizacao,erroLocalizacao)
} else {
    console.log("geolocalização nao suportada")
}

function mostraLocalizacao(pos){
    long.innerHTML=pos.coords.longitude
    lati.innerHTML=pos.coords.latitude
}

function erroLocalizacao(){
    console.log("Erro ao obrter a localização")
}