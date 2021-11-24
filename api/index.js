const customExpress = require('./config/customExpress');
const conexao = require('./config/dbconfig');
const Tabelas = require('./infra/tabela');

conexao.connect(erro => {
    if(erro) {
        console.log('deu ruim a conexao');
    }
    else {
        console.log('deu bom a conexao');

        //Verifica e cria tabela
        Tabelas.init(conexao)
            
        //Inicia servidor da api 
        const server = customExpress();

        server.listen(3000, () => console.log('Servidor rodando...'));                
    }
})

