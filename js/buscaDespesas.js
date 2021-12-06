let listaDespesas = [];
let idDespesaAtual;

let atualizaDespesa = document.getElementById("atualizar-despesa")

atualizaDespesa.addEventListener("click", () => {
    
    let despesa = buscaDadosFormulario();    

    let request = new XMLHttpRequest();    
    request.open("PUT", "http://localhost:3000/despesa/" + idDespesaAtual);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(despesa);    
    request.addEventListener("load", () => {        
        if(request.status == 200) {
            alert('Despesa atualizada com sucesso!')
            document.location.reload(true);
        }
        else {
            alert('Erro ao atualizar despesa')
        }
    })
});

function buscaDadosFormulario() {
    let dadosFormulario = document.getElementById("form-despesa").elements;
    
    
    let despesa = {
        "dtdespesa": criaData(dadosFormulario.dtdespesa.value),
        "categoria": dadosFormulario.tipo.value,
        "descricao": dadosFormulario.descricao.value,
        "valor": dadosFormulario.valor.value.replace(",","."),
        "situacao": dadosFormulario.situacao.value
    };
    
    return JSON.stringify(despesa);
}

function carregaConsulta() {
    listaDespesas = [];
    buscarDespesas();
}

function buscarDespesas() {
    let request = new XMLHttpRequest();    
    request.open("GET", "http://localhost:3000/despesas");
    request.send();
    
    request.addEventListener("load", () => {            
        if(request.status == 200) {            
            populaTabelaDespesas(JSON.parse(request.responseText));        
        }
        else {
            alert("Não foi possível buscar as despesas");
        }
    })        
}

function populaTabelaDespesas(jsonDespesas) {
    jsonDespesas.forEach(function(despesa) {
        listaDespesas.push(despesa);
        adicionaDespesaTabela(despesa);
    });
}

function adicionaDespesaTabela(despesa){
        
    let tabelatr = montatr(despesa);
        
    let tabela = document.querySelector("#tabela-despesas");
    tabela.appendChild(tabelatr);
}

function montatr(despesa){
    let trdespesa = document.createElement("tr");
    trdespesa.classList.add("despesa");

    let datatd = montatd (despesa.dtdespesa, "dtdespesa");
    let categoriatd = montatd (despesa.categoria, "categoria");
    let descricaotd =  montatd (despesa.descricao, "descricao");
    let valortd =  montatd (despesa.valor, "valor");
    let situacaotd =  montatd (despesa.situacao, "situacao");
    let acoestd =  montatdAcoes(despesa.id);

    datatd.textContent = montaData(despesa.dtdespesa);
    categoriatd.textContent = despesa.categoria;
    descricaotd.textContent = despesa.descricao;
    valortd.textContent = despesa.valor;
    situacaotd.textContent = despesa.situacao;
    //acoestd.textContent = '<button class="clsActionButton" id="idAddButton" onclick="idAddButton_onclick();">Add</button>';

    trdespesa.appendChild(datatd);
    trdespesa.appendChild(categoriatd);
    trdespesa.appendChild(descricaotd);
    trdespesa.appendChild(valortd);
    trdespesa.appendChild(situacaotd);
    trdespesa.appendChild(acoestd);

    return trdespesa;
}

function montatd(dado, classe){
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montatdAcoes(idDespesa) {
    let td = document.createElement("td");

    //Botao atualiza
    let btnAtualiza = document.createElement('button');
    btnAtualiza.type = "button";
    btnAtualiza.className = "btnAcoes";
    btnAtualiza.textContent = "Editar";
    btnAtualiza.onclick = function() {
        atualizarDespesa(idDespesa)
    };

    //Botao remove
    let btnRemove = document.createElement('button');
    btnRemove.type = "button";
    btnRemove.className = "btnAcoes";
    btnRemove.textContent = "Remover";
    btnRemove.onclick = function() {
        apagarDespesa(idDespesa)
    };
    
    td.appendChild(btnAtualiza);
    td.appendChild(btnRemove);

    return td;
}

function atualizarDespesa(idDespesa) {    
    abreModal();
    populaModal(idDespesa);
    idDespesaAtual = idDespesa;
}

function abreModal() {
    let modal = document.getElementById("modalAtualiza");
        
    //
    let fechaModal = document.getElementsByClassName("fechar")[0];
    
    modal.style.display = "block";    
    
    fechaModal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            idDespesaAtual = null;
        }
    }
}

function populaModal(idDespesa) {
    const despesa = listaDespesas.find(despesa => despesa.id === idDespesa);

    document.getElementById('dtdespesa').value = montaData(despesa.dtdespesa);
    document.getElementById('tipo').value = despesa.categoria;
    document.getElementById('descricao').value = despesa.descricao;
    document.getElementById('valor').value = despesa.valor;
    document.getElementById('situacao').value = despesa.situacao;
    
}

function apagarDespesa(idDespesa) {
    let request = new XMLHttpRequest();    
    request.open("DELETE", "http://localhost:3000/despesa/" + idDespesa);
    request.send();
    
    request.addEventListener("load", () => {            
        if(request.status == 200) {            
            alert("Despesa removida com sucesso!")
            document.location.reload(true);
        }
        else {
            alert("Não foi possível remover a despesa");
        }
    })

}

function montaData(data) {

    let date = new Date(data);
    let dataFormatada = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

    return dataFormatada;
}



function criaData(data) {
    let retornaData;

    let ano = (data.split('/')[2]);
    let mes = (data.split('/')[1]);
    let dia = (data.split('/')[0]);

    retornaData = ano + '-' + mes + '-' + dia

    return retornaData;
}
