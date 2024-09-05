const notionService = require('../services/notionService');

exports.getBonos = async (req, res) => {
  try {
    const bonos = await notionService.getBonos(); 
    res.json(bonos); 
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los bonos' });
  }
};
