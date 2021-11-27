let cadastarDespesa = document.getElementById("cadastrar-despesa")

cadastarDespesa.addEventListener("click", () => {
    
    let despesa = buscaDadosFormulario();    

    let request = new XMLHttpRequest();
    console.log(cadastarDespesa);    
    request.open("POST", "http://localhost:3000/despesa");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(despesa);    
    request.addEventListener("load", () => {        
        if(request.status == 201) {
            alert('Despesa cadastrada com sucesso!')
        }
        else {
            alert('Erro ao cadastrar despesa')
        }
    })
});

function buscaDadosFormulario() {
    let dadosFormulario = document.getElementById("form-despesa").elements;
    
    
    let despesa = {
        "dtdespesa": dadosFormulario.dtdespesa.value,
        "categoria": dadosFormulario.tipo.value,
        "descricao": dadosFormulario.descricao.value,
        "valor": dadosFormulario.valor.value,
        "situacao": "PAGO"
    };
    
    return JSON.stringify(despesa);
}