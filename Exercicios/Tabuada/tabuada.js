function tabuada() {
    var num = document.getElementById('txnum')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var numero = Number(num.value)
        tab.innerHTML = ''
        for (var cont = 1; cont <= 10; cont++) {
            var item = document.createElement('option')
            item.text= `${numero} x ${cont} = ${numero*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item) 
            
        }
    }
}
