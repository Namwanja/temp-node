// var x =; 
// //node wraps it inside  function
const EventEmitter = require('events')


var url = 'https://nndnjnjnj.com'

class Logger extends EventEmitter{
 log(message){
        // send http request
        console.log(message)
        
        // raise an event
        this.emit(`messageLogged`, {id:1, url: 'http://'}) 
    }
}

// module.exports.log = log
module.exports = Logger

