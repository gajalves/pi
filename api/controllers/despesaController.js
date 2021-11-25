const DespesaModel = require('../models/despesaModel')

class DespesaController {
    
    buscarDespesas(req, res) {
        const retBuscaDespesa = DespesaModel.buscarDespesa(req, res)
        .then(result => res.send(result))
        .catch();
    }

    buscarDespesasPorId(req, res) {
        const retBuscaDespesaPorId = DespesaModel.buscarDespesaPorId(req, res)
        .then(result => res.send(result))
        .catch();
    }

    criarDespesa(req, res) {
        const retCriaDespesa = DespesaModel.criarDespesa(req, res)
        .then(result => res.send(result))
        .catch();
    }

    removerDespesa(req, res) {
        console.log(req.params.id)
        DespesaModel.removerDespesa(req, res)
        .then(result => res.send(result))
        .catch();
    }

    atualizarDespesa(req, res) {        
        const retAtualizaDespesa = DespesaModel.atualizarDespesa(req, res)
        .then(result => res.send(result))
        .catch();
    }
}


module.exports = new DespesaController;