const axios = require('axios');

const NOTION_API_KEY = process.env.NOTION_API_KEY; 
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_API_URL = 'https://api.notion.com/v1/databases';

const headers = {
  Authorization: `Bearer ${NOTION_API_KEY}`,
  'Notion-Version': '2022-06-28',
};

//obtener los bonos desde Notion
exports.getBonos = async () => {
  try {
    const response = await axios.post(
      `${NOTION_API_URL}/${NOTION_DATABASE_ID}/query`, 
      {},
      { headers }
    );
    return response.data.results; 
  } catch (error) {
    console.error('Error al obtener los bonos de Notion:', error);
    throw error;
  }
};
