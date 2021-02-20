const axios = require('axios');

exports.getCharactersFromAPI = async () => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character');
  return data;
};
