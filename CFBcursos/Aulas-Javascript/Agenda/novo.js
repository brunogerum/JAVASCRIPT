const btn_gravar=document.getElementById('btn_gravar');
const btn_cancelar=document.getElementById('btn_cancelar');
const f_nome=document.getElementById('f_nome');
const f_celular=document.getElementById('f_celular');
const f_email=document.getElementById('f_email');
const f_nasc=document.getElementById('nasc');

btn_gravar.addEventListener("click",(evt)=>{
    const valores={
        "f_nome":f_nome.value,
        "f_celular":f_celular.value,
        "f_email":f_email.value,
        "f_nasc":f_nasc.value,
    }
    console.log(valores)
    const cabecalho = {
        Method:'POST',
        Body:JSON.stringify(valores)
    
    }
    const endpoint="http://127.0.0.1:1880/contatos"
    fetch(endpoint,cabecalho)
    .then(res=>{
    if(res.status==200){
        console.log('OK')
    } else{
        alert('ERRO')
    }
    })
})




