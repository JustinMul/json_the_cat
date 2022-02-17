const request = require('request');
let catType = process.argv.splice(2);


request('https://api.thecatapi.com/v1/breeds/search?q=' + catType, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  const [data] = JSON.parse(body);

  if (!data) {
    console.log('no breed given');
  } else {
    console.log(data.description);
  }
});

