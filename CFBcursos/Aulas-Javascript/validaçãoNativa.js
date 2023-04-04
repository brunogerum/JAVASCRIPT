const f_nome = document.querySelector('#f_nome')
const f_nota = document.querySelector('#f_nota')
const f_msg = document.querySelector('#f_msg')

document.querySelector('#btn_validar').addEventListener("click",(evt)=>{
    let estadoValidacao=f_nota.validity

    if(estadoValidacao.valueMissing){
       f_nota.setCustomValidity('Este Campo é Obrigatorio poxa')       
    } else if(estadoValidacao.rangeOverflow){
        f_nota.setCustomValidity('tem que ser menos de 10, bobão')       
     }
    //   if(f_nota.validity.valueMissing){
    //     msg="OBRIGATORIO"
    //   }


    f_nota.reportValidity() // esse é aquele campo com a esclamação amarela caixa de texto
    f_msg.innerHTML=f_nota.validationMessage


    // if(!f_nota.checkValidity()){
    //     msg= f_nota.validationMessage
    
    // }

    // f_msg.innerHTML=msg
    evt.preventDefault()
})

//Metodos de validação do DOM
// checkValidity() serve caso a validação nao seja satisfeita
// setCustomValidity()

// Propriedade de validação do DOM
// validity
// validationMessage

// Propriedades de validação
/*
    customError: true, se uma mensagem de validação personalizada for definida.
    patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
    rangeOverflow: true, se o valor de um elemento for maior que o seu atributo max.
    rangeUnderflow: true, se o valor de um elemento for menor que o seu atributo min.
    stepMismatch: true, se o valor de um elemento for invalido por seu atributo step.
    tooLong: true, se o valor de um elemento for invalido por seu atributo step.
    typeMismatch: true, se o valor de um elemento for invalido por seu atributo type.
    valueMissing: true, se um elemento (com um atributo obrigatorio) não tiver valor.
    valid: true, se o valor de um elemento for válido.
*/