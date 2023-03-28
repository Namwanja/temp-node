const {readfile, writeFile, readFile} = require('fs')
// async make call backs when done

console.log('start')

readFile('./content/first.txt','utf8', (err, result)=>
{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8', (err, result)=>
    {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,(err, result)=>{
            if(err){
                console.log(err)
                return
            }

            console.log('starting the next task')
            console.log(result)
        }
        )
    })
    
})
console.log('done with the task')