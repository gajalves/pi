const express = require('express');


const server = express();
server.use(express.json())

//Temp db
const nomes = ['Gabriel', 'Ariane', 'Gustavo', 'Luana', 'Amanda', 'Jovs', 'Bruna', 'Ana Claudia'];

//Get by id
server.get('/nomes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(nomes[index]);
})

//Get all
server.get('/nomes', (req, res) => {
    return res.json(nomes);
})

//Post 
server.post('/nomes', (req, res) => {
    const { nome } = req.body;
    nomes.push(nome);
    return res.json(nomes);
})

//Put 
server.put('/nomes/:index', (req, res) => {
    const { index } = req.params;
    const { nome } = req.body;

    nomes[index] = nome;

    return res.json(nomes);
})

//Put 
server.delete('/nomes/:index', (req, res) => {
    const { index } = req.params;
    
    nomes.splice(index, 1);
            
    return res.json( {message: "Nome removido com sucesso! "} );
})


server.listen(3000, () => console.log('Servidor rodando...'));