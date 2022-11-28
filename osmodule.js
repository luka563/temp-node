const os = require('os')

console.log(os.uptime())

const osData = {
    name : os.hostname(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}

console.log(osData)