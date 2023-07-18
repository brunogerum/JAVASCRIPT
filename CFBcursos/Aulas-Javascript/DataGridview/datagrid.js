const configdgv ={
    endpoint:"http://127.0.0.1:1880/produtos",
    idDestino:"dgvDados",
}
    
const dgv=()=>{
    const dgvDados = document.getElementById(configdgv.idDestino)
    dgvDados.innerHTML=""
    fetch(configdgv.endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach((el)=>{
            const dgvLinha=document.createElement("div")
            dgvLinha.setAttribute("class","dgvLinha")

            const c1 = document.createElement("div");
            c1.setAttribute("class","c1");
            c1.innerHTML=el.n_id_produtos;
            dgvLinha.appendChild(c1);

            const c2 = document.createElement("div");
            c2.setAttribute("class","c2");
            c2.innerHTML=el.s_nome_produtos;
            dgvLinha.appendChild(c2);

            const c3 = document.createElement("div");
            c3.setAttribute("class","c3");
            c3.innerHTML=el.s_marca_produtos;
            dgvLinha.appendChild(c3);

            const c4 = document.createElement("div");
            c4.setAttribute("class","c4");
            c4.innerHTML=el.s_modelo_produtos;
            dgvLinha.appendChild(c4);

            const c5 = document.createElement("div");
            c5.setAttribute("class","c5");
            dgvLinha.appendChild(c5);

            const imgDelete = document.createElement("img");
            imgDelete.setAttribute("class","dgvIcone");
            imgDelete.setAttribute("src","deletar.svg");
            imgDelete.addEventListener("click",(evt)=>{
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                const linha = evt.target.parentNode.parentNode
                const endpoint = `http://127.0.0.1:1880/removeproduto/${id}`
                fetch(endpoint)
                .then(res=>{
                    if(res.status==200){
                        linha.remove();
                    }
                })
                    
            })
            c5.appendChild(imgDelete);

            const imgEdit = document.createElement("img");
            imgEdit.setAttribute("class","dgvIcone");
            imgEdit.setAttribute("src","editar.svg");
            imgEdit.addEventListener("click",(evt)=>{
                document.querySelector("#janelaEditar").classList.remove("ocultar");
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                const endpoint = `http://127.0.0.1:1880/produto/${id}`
                fetch(endpoint)
                .then(res=>res.json())
                .then (res=>{
                    document.querySelector("#f_id2").value=res[0].n_id_produtos
                    document.querySelector("#f_produto2").value=res[0].s_nome_produtos
                    document.querySelector("#f_marca2").value=res[0].s_marca_produtos
                    document.querySelector("#f_modelo2").value=res[0].s_modelo_produtos
                })

            })
            c5.appendChild(imgEdit);

            const imgVisual = document.createElement("img");
            imgVisual.setAttribute("class","dgvIcone");
            imgVisual.setAttribute("src","visualizar.svg");
            imgVisual.addEventListener("click",(evt)=>{
                document.querySelector(".janelaView").classList.remove("ocultar");
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                const endpoint = `http://127.0.0.1:1880/produto/${id}`
                fetch(endpoint)
                .then(res=>res.json())
                .then (res=>{
                    document.querySelector("#f_id").value=res[0].n_id_produtos
                    document.querySelector("#f_produto").value=res[0].s_nome_produtos
                    document.querySelector("#f_marca").value=res[0].s_marca_produtos
                    document.querySelector("#f_modelo").value=res[0].s_modelo_produtos
                })

            })
            c5.appendChild(imgVisual);

            dgvDados.appendChild(dgvLinha)
        })
    })
}

dgv(configdgv);

document.querySelector("#btn_ok").addEventListener("click",(evt)=>{
    document.querySelector(".janelaView").classList.add("ocultar");    
})

document.querySelector("#btn_gravar").addEventListener("click",(evt)=>{
    const id = document.querySelector("#f_id2").value
    const produto = document.querySelector("#f_produto2").value
    const marca = document.querySelector("#f_marca2").value
    const modelo = document.querySelector("#f_modelo2").value
    const endpoint = `http://127.0.0.1:1880/updateproduto/${id}/${produto}/${marca}/${modelo}`
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            document.querySelector("#janelaEditar").classList.add("ocultar");
            dgv(configdgv);
        } else{
            alert("ERRO")
        }
    })
})



document.querySelector("#btn_cancelar").addEventListener("click",(evt)=>{
    document.querySelector("#janela").classList.add("ocultar");    
})
