const fs = require('fs');

// Streams are ways of reading data piece by piece
const readStream = fs.createReadStream('./files/lorem.txt', { encoding: 'utf8' });

const createWriteStream = fs.createWriteStream('./files/lorem_copy.txt');

readStream.on('data', (chunk) => {
  console.log('----- NEW CHUNK -----');
  console.log(chunk);
  createWriteStream.write('\nNEW CHUNK\n');
  createWriteStream.write(chunk);
});

// piping is another way of reading data piece by piece
// piping
readStream.pipe(createWriteStream);