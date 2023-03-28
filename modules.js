// Modules -encapuslated, structured code
// common js ===== every file is a module
const {john,peter} = require('./names')
const sayHi = require('./utils')
const data = require('./6-alternative-flavour')



// require and invoke
// third party set up
require('./7-mind-grenade')

// sayHi('solomon')
// sayHi(john)
// sayHi(peter)

//os
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

// system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()

}

console.log(currentOs)