const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('node:fs')
const fsPromises = require('node:fs/promises')
const path = require('node:path')

const logEvents = async (message) => {
  const dateTime = format(new Date(), 'MM/dd/yyyy\tHH:mm:ss')
  const logMessage = `${dateTime}\t${uuid()}\t${message}`

  console.log(logMessage)

  try {
    if (!fs.existsSync(path.join(__dirname, './logs'))) {
      await fsPromises.mkdir(path.join(__dirname, './logs'))
    }
    await fsPromises.appendFile(path.join(__dirname, './logs/log.txt'), `${logMessage}\n`)
  } catch (error) {
    console.error(error)
  }
}

module.exports = logEvents
