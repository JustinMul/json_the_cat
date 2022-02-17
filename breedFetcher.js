const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error,null);
    }
    const [data] = JSON.parse(body);
  
    if (!data) {
      callback(null,'Invalid Breed');

    } else {
      callback(null,data.description);
    }
  });
};

module.exports = { fetchBreedDescription };