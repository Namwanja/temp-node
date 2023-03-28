// console.log() //Global 
// setTimeout()
// clearTimeout()

// setInterval()
// clearInterval()

// // modularity ==> module object

// const logger = require('./logger.js')

// // logger.log('message')
// logger('message')

// const path = require('path')

// var pathObj =path.parse(__filename)
// console.log(pathObj)


// const os = require('os')

// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()

// console.log(totalMemory , freeMemory)

// const fs = require('fs')

// fs.readdir("$", (err,files)=>{
//     if(err) console.log(`there is an error`, err)
//     else console.log(`there are files`, files)
// })

// fs.readdir("./", (err,files)=>{
//     if(err) console.log(`there is an error`, err)
//     else console.log(`there are files`, files)
// })

//events

// const EventEmitter = require('events')

// const Logger = require('./logger')
// const logger = new Logger()

// // register a listener
// logger.on(`messageLogged`, (arg)=>{
//     console.log(`ListenerCalled`, arg)
// })

// logger.log('message')
// // Raise: logging (data: message)

const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hello World')
        res.end()
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4]))
        res.end()
    }
})

// server.on('connection', (socket)=>{
//     console.log('New connection...')
// })

server.listen(3000)

console.log('Listening on port 3000...')