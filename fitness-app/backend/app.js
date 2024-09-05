const express = require('express');
const cors = require('cors');
const notionRoutes = require('./routes/notionRoutes'); //importar rutas
require('dotenv').config(); //cargar las variables de entorno

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Parsear JSON

// Rutas
app.use('/api/notion', notionRoutes);

// Puerto
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
