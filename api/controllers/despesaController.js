const DespesaModel = require('../models/despesaModel')

class DespesaController {
    
    buscarDespesas(req, res) {
        const retBuscaDespesa = DespesaModel.buscarDespesa(req, res)
        .then(result => res.send(result)
        .catch(res.sendStatus(500)));                
    }

    criarDespesa(req, res) {
        const retCriaDespesa = DespesaModel.criarDespesa(req, res)
        .then(result => res.send(result))
        .catch();
    }

    removerDespesa(req, res) {
        DespesaModel.removerDespesa(req, res);
    }

    atualizarDespesa(req, res) {
        DespesaModel.atualizarDespesa(req, res);
    }
}


module.exports = new DespesaController;