const conexao = require('../config/dbconfig')

class Despesa {

    buscarDespesa = function(req, res) {
        res.send('buscando....');
        
    }
        
    buscarPorDescricao() {
    
    }
    
    criarDespesa(novaDespesa, resultado) {
        const sql = 'INSERT INTO despesas()'


        conexao.query(sql, novaDespesa, (erro, result) => {
            if(erro) {
                console.log(erro);
            }
            else {
                console.log(result);
            }
        })
    }
    
    atualizarDespesa() {
    
    }
    
    removerDespesa() {
    
    }        
}

module.exports = new Despesa;