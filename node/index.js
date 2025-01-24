// const EventEmitter = require('events')

// const emitter = new EventEmitter();

// emitter.on('greet',(name)=>{
//     console.log(`Hi ${name}`)
// })

// emitter.emit('greet','suhail')


// async function fetchData(url){
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
// }
// fetchData('https://jsonplaceholder.org/users');

//  fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
//      return response.json();
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


// const express = require('express')
// const app = express()

// app.use(express.json())


// app.get('/', (req, res) => {
//     throw new Error('Error vannu')
// })
// app.get('/admin', (req, res) => {
//     res.status(200).json({
//         sucess:true,
//         messgae:"Wooowwww"
//     })
// })

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).json({
//         sucess: false,
//         message: "Internal server Error.."
//     })
// })


// app.listen(3000,()=>{
//     console.log("Server listening to post 3000")
// })

//================================================================

// const express = require('express')
// const app = express()


// const logger = ((req,res,next)=>{
//     console.log(`Date is : ${new Date().toISOString()}`)
//     next()
// })

// app.use(logger)


// app.get('/admin', (req, res) => {
//     res.status(200).json({
//         sucess:true,
//         messgae:"Wooowwww"
//     })
// })

// app.listen(3000,()=>{
//     console.log("Server listening to post 3000")
// })


