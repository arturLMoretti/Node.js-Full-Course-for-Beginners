const fs = require('fs');

if (!fs.existsSync('./new_files')) {
  fs.mkdir('./new_files', (err) => {
    if (err) throw err;
    console.log('Directory created');
  });
}


if (fs.existsSync('./new_files')) {
  fs.rmdir('./new_files', (err) => {
    if (err) throw err;
    console.log('Directory created');
  });
}

