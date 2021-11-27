let listaDespesas = [];

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

    datatd.textContent = despesa.dtdespesa;
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
        }
    }
}

function populaModal(idDespesa) {
    const despesa = listaDespesas.find(despesa => despesa.id === idDespesa);

    document.getElementById('dtdespesa').value = despesa.dtdespesa;
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