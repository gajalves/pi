const DespesaController = require('../controllers/despesaController')

module.exports = server => {        
    server.get('/despesas', (req, res) => DespesaController.buscarDespesas(req, res));

    server.post('/despesa', (req, res) => DespesaController.criarDespesa(req, res));

    server.put('/despesa', (req, res) => DespesaController.atualizarDespesa(req, res));

    server.delete('/despesa', (req, res) => DespesaController.removerDespesa(req, res));
}

