const { getCharactersFromAPI } = require('./utils');
const catchAsync = require('../../utils/catchAsync');

exports.getAllCharacters = catchAsync(async (req, res, next) => {
  const characterData = await getCharactersFromAPI();
  res.status(200).json({
    status: 'success',
    results: characterData.results.length,
    data: {
      characters: characterData.results,
    },
  });
});
