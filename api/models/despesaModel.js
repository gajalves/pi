const conexao = require('../config/dbconfig')

class Despesa {

    async buscarDespesa(req, res) {        
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
     
    async buscarDespesaPorId(req, res) {        
        const sql = 'SELECT * FROM despesas WHERE id = ' + req.params.id;
                
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
    
    async removerDespesa(req, res) {
        let buscaDespesa;

        if(req.params.id) {
            await this.buscarDespesaPorId(req, res)
            .then(result => buscaDespesa = result)
        }                

        return buscaDespesa;
    }        

    atualizarDespesa(req, res) {
        if(req.params.id) {
            
        }
    }    
}

module.exports = new Despesa;