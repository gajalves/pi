const conexao = require('../config/dbconfig')

class Despesa {

    async buscarDespesa(req, res) {        
        const sql = 'SELECT id, dtdespesa, categoria, descricao, valor, situacao FROM despesas';
                
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
        const sql = 'SELECT id, DATE(dtdespesa), categoria, descricao, valor, situacao FROM despesas WHERE id = ' + req.params.id;
                
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

    async criarDespesa(req, res) {

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
                        res.status(201).json({
                            Mensagem: "Despesa criada com sucesso"
                        })                        
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

        if(buscaDespesa.length == 0){
            return res.status(404).json({
                Mensagem: "Despesa nao encontrada"
            })
        } else {
            //Remove
            const sql = "DELETE FROM despesas WHERE id = " + req.params.id;

            return new Promise((resolve, reject) => {
                conexao.query(sql, (erro, result ) => {
                    if(erro) {                
                        console.log(erro);
                    }
                    else {                                                      
                        res.status(200).json({
                            Mensagem: "Despesa removida com sucesso"
                        })
                    }
                })
            })
        }
    }        

    async atualizarDespesa(req, res) {
        let buscaDespesa;

        if(req.params.id) {
            await this.buscarDespesaPorId(req, res)
            .then(result => buscaDespesa = result)
        }                

        if(buscaDespesa.length == 0){
            return res.status(404).json({
                Mensagem: "Despesa nao encontrada"
            })
        } else {
            //Atualiza
            const { dtdespesa } = req.body;
            const { categoria } = req.body;
            const { descricao } = req.body;
            const { valor } = req.body;
            const { situacao } = req.body;


            if(dtdespesa && categoria && descricao && valor && situacao) {
                const sql = 'UPDATE despesas SET dtdespesa = "'+ dtdespesa + '", ' +
                            '                    categoria = "'+ categoria + '", ' +
                            '                    descricao = "'+ descricao + '", ' +
                            '                    valor = '+ valor + ', ' +
                            '                    situacao = "'+ situacao + '"' +
                            'WHERE id = ' + req.params.id;                
                console.log(sql)
                return new Promise((resolve, reject) => {
                    conexao.query(sql, (erro, result ) => {
                        if(erro) {                
                            console.log(erro);
                        }
                        else {      
                            res.status(200).json({
                                Mensagem: "Despesa atulizada com sucesso"
                            })                        
                        }
                    })
                })
            } else {
                res.status(400).json({
                    Mensagem: "Verificar campos do json"
                });
            }
        }
    }    
}

module.exports = new Despesa;