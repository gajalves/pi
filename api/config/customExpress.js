const express = require('express');
const consign = require('consign');

const cors = require('cors');

const corsOpt = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type'],    
}

module.exports = () => {
    const server = express();
    server.use(express.json())
    server.use(cors(corsOpt))

    consign()
        .include('routes')
        .into(server)

    return server
}

