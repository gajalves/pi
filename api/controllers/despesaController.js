const DespesaModel = require('../models/despesaModel')

class DespesaController {
    
    buscarDespesas(req, res) {
        DespesaModel.buscarDespesa(req, res);
    }

    criarDespesa(req, res) {
        DespesaModel.criarDespesa(req, res);
    }

    removerDespesa(req, res) {
        DespesaModel.removerDespesa(req, res);
    }

    atualizarDespesa(req, res) {
        DespesaModel.atualizarDespesa(req, res);
    }
}


module.exports = new DespesaController;