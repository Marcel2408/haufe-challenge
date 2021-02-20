const { getCharactersFromAPI } = require('./utils');

exports.getAllCharacters = async (req, res) => {
  try {
    const characterData = await getCharactersFromAPI();
    res.status(200).json({
      status: 'success',
      results: characterData.results.length,
      data: {
        characters: characterData.results,
      },
    });
  } catch (error) {
    console.log('error getting all characters', error);
    res.sendStatus(500);
  }
};
