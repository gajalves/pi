class Tabelas {
    init(conexao) {
       
        this.conexao = conexao
        this.criarTabelaDespesa();
    }

    criarTabelaDespesa() {       
        const sql = 'CREATE TABLE IF NOT EXISTS despesas ( ' +
            'id INT AUTO_INCREMENT PRIMARY KEY, ' +
            'dtdespesa DATE, ' +
            'categoria VARCHAR(100) NOT NULL, ' +
            'descricao VARCHAR(255) NOT NULL, '  + 
            'valor DECIMAL(12,2) NOT NULL, '  + 
            'situacao VARCHAR(50) NOT NULL'	+	
            ');'
        
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log('erro ao executar sql');                
            }
            else {
                console.log('sql executado com sucesso');                
            }                        
        });                
    }
}


module.exports = new Tabelas