const fs = require('fs'); // pull in the system module

const defaultImage = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(defaultImage);
  response.end();
};

module.exports = {
  getImage,
};
