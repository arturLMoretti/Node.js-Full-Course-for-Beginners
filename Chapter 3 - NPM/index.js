const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'HH:mm:ss - MM/dd/yyyy'))

console.log(uuid());

// maiorVersion.minorVersion.patchVersion
// "date-fns": "^2.30.0", - you can update patch and minor versions
// "data-fns": "2.30.0", - exact version
// "data-fns": "~2.30", - update only patchs
// "data-fns": "*", - latest version

// uuid - Universally Unique IDentifier - is a way to generate unique IDs
// v1 - version 1 - time based
// v2 - version 2 - DCE Security
// v3 - version 3 - namespace based
// v4 - version 4 - random
// v5 - version 5 - namespace based

// date-fns - date functions
// moment - date functions  
// lodash - utility functions