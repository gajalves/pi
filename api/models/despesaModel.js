const conexao = require('../config/dbconfig')

class Despesa {

    buscarDespesa(req, res) {        
        const sql = 'SELECT * FROM despesas';
                
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, result ) => {
                if(erro) {                
                    reject()
                }
                else {                    
                    resolve(result);
                }
            })
        })
                        
    }
                            
    criarDespesa(req, res) {

        let resposta;

        const { dtdespesa } = req.body;
        const { categoria } = req.body;
        const { descricao } = req.body;
        const { valor } = req.body;
        const { situacao } = req.body;

        if(dtdespesa && categoria && descricao && valor && situacao) {
            const sql = 'INSERT INTO despesas(dtdespesa, categoria, descricao, valor, situacao) ' + 
            'values("'+ dtdespesa + '", "' + categoria + '", "' + descricao + '", "' + valor + '", "' + situacao + '")';
                
            return new Promise((resolve, reject) => {
                conexao.query(sql, (erro, result ) => {
                    if(erro) {                
                        console.log(erro);
                    }
                    else {      
                        resposta = "Despesa criada com sucesso";
                        
                        resolve(resposta);
                    }
                })
            })
        } else {
            res.sendStatus(400);
        }        
    }
    
    removerDespesa(req, res) {
        res.send('removendo despesas....');
    }        

    atualizarDespesa(req, res) {
        res.send('atualizando despesas....');
    }
    
}

module.exports = new Despesa;