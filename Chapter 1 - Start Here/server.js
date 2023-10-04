// 1 - Node runs on a server
// 2 - Node is a runtime environment for JS that uses the V8 engine
// 3 - The console is the terminal window
// 4 - global object is the window object in the browser
console.log(global)

// 5 - commonJS module system instead of ES6 modules (import/export)
const os = require('os')
const path = require('path')
const math = require('./math')

console.log(os.type(), os.platform(), os.homedir(), os.cpus(), os.version())

console.log(__dirname, __filename)

console.log(path.dirname(__filename), path.extname(__filename), path.basename(__filename), path.parse(__filename))

console.log(math.add(1, 2))
