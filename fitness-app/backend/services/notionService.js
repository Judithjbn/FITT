import axios from 'axios';

const notionService = {
  getBonos: async () => {
    const response = await axios.get('/api/notion/bonos');
    return response.data;
  },
};

export default notionService;
