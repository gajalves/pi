const express = require('express');
const router = express.Router();

const despesaController = require('../controllers/despesaController');

//Get all
router.get('/buscarDespesas', despesaController.buscarDespesa(req,res));


module.exports = router