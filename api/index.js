const customExpress = require('./config/customExpress');
const conexao = require('./config/dbconfig');
const Tabelas = require('./infra/tabela');

const server = customExpress();

server.listen(3000, () => console.log('Servidor rodando...'));

// conexao.connect(erro => {
//     if(erro) {
//         console.log('deu ruim a conexao');
//     }
//     else {
//         console.log('deu bom a conexao');

//         //Verifica e cria tabela
//         Tabelas.init(conexao)
            
//         //Inicia servidor da api 
        
        
//         //Rotas de despesas
//         const rotasDespesas = require('./routes/despesasRotas');
//         server.use(rotasDespesas);
//     }
// })


//Get by id
// server.get('/nomes/:index', (req, res) => {
//     const { index } = req.params;

//     return res.json(nomes[index]);
// })


//Get by id
// server.get('/nomes/:index', (req, res) => {
//     const { index } = req.params;

//     return res.json(nomes[index]);
// })

// //Get all
// server.get('/nomes', (req, res) => {
//     return res.json(nomes);
// })

// //Post 
// server.post('/nomes', (req, res) => {
//     const { nome } = req.body;
//     nomes.push(nome);
//     return res.json(nomes);
// })

// //Put 
// server.put('/nomes/:index', (req, res) => {
//     const { index } = req.params;
//     const { nome } = req.body;

//     nomes[index] = nome;

//     return res.json(nomes);
// })

// //Put 
// server.delete('/nomes/:index', (req, res) => {
//     const { index } = req.params;
    
//     nomes.splice(index, 1);
            
//     return res.json( {message: "Nome removido com sucesso! "} );
// })


