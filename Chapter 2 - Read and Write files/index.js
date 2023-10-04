const fsPromises = require('fs').promises;
const path = require('path');
const fs = require('fs');

// Show how to read and write files
// Illustrate the difference between synchronous and asynchronous code
fs.readFile(path.join(__dirname, './files/starter.txt'), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
})

fs.writeFile(path.join(__dirname, './files/reply.txt'), 'I am writing to a file', (err) => {
  if (err) throw err;
  console.log('File has been written');
}); 

fs.appendFile(path.join(__dirname, './files/no_control.txt'), 'I have no control of what comes first' ,(err, data) => {
  if (err) throw err;
  console.log('appended');
})

fs.writeFile(path.join(__dirname, './files/no_control.txt'), '\n\nI know that', (err) => {
  if (err) throw err;
  console.log('File has been written');
}); 

fs.appendFile(path.join(__dirname, './files/no_control_2.txt'), 'I still have control of what comes first' ,(err, data) => {
  if (err) throw err;
  console.log('appended');
  fs.writeFile(path.join(__dirname, './files/no_control_2.txt'), '\n\nI know that', (err) => {
    if (err) throw err;
    console.log('File has been written');
  }); 
})

fs.writeFile(path.join(__dirname, './files/control.txt'), 'I have control of what comes first' ,(err, data) => {
  if (err) throw err;
  console.log('appended');
  fs.appendFile(path.join(__dirname, './files/control.txt'), '\n\nI know that', (err) => {
    if (err) throw err;
    console.log('File has been written');
  }); 
})

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, './files/starter.txt'));
    console.log('async', data.toString());

    await fsPromises.writeFile(path.join(__dirname, './files/betterControl.txt'), 'I have better control in writing to a file');
    await fsPromises.appendFile(path.join(__dirname, './files/betterControl.txt'), '\n\nI know that');
  } catch (error) {
    console.log(error);
  }
}

fileOps();