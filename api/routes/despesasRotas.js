const {Despesa} = require('../controllers/despesaController')

module.exports = server => {        
    server.get('/buscarDespesas', (req, res) => res.send('send...'));
}

