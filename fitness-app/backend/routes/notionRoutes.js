const express = require('express');
const router = express.Router();
const notionController = require('../controllers/notionController');

//obtener todos los bonos de Notion
router.get('/bonos', notionController.getBonos);

//crear un nuevo bono
router.post('/bonos', notionController.createBono);

//validar una visita y actualizar el bono
router.post('/visitas', notionController.validateVisit);

module.exports = router;