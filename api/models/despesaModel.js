const conexao = require('../config/dbconfig')

class Despesa {

    buscarDespesa(req, res) {
        res.send('buscando despesas....');
    }
                            
    criarDespesa(req, res) {
        // const sql = 'INSERT INTO despesas()'
        // conexao.query(sql, novaDespesa, (erro, result) => {
        //     if(erro) {
        //         console.log(erro);
        //     }
        //     else {
        //         console.log(result);
        //     }
        // })
        res.send('criando despesas....');
    }
    
    removerDespesa(req, res) {
        res.send('removendo despesas....');
    }        

    atualizarDespesa(req, res) {
        res.send('atualizando despesas....');
    }
    
}

module.exports = new Despesa;