const EventEmitter = require('events')

const emitter = new EventEmitter();

emitter.on('greet',(name)=>{
    console.log(`Hi ${name}`)
})

emitter.emit('greet','suhail')