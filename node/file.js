// const fs = require('fs')

// // fs.writeFile('test.txt','HI suhail',(err)=>{
// //     if(err){
// //         console.log(err)
// //         return
// //     }
// //     console.log("Fitr has written!!!")
// // })

// const date = new Date().toDateString();
// fs.writeFile('test.txt',date,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("Written!!!!!")
// })


// const fs = require('fs')

// // fs.readFile('test.txt','utf8', (error,data)=>{
// //     if(error){
// //         console.log(error)
// //     }
// //     console.log(data)
// // })

// const readFile = async () => {
//     try {
//         const data = await fs.promises.readFile('test.txt', 'utf8');
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFile();



// const os = require('os')
// console.log(os.freemem())

// const http = require('http')

// const server = http.createServer((req, res) => {
//     const user = {
//         name: 'suhail',
//         age: 22
//     }
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(user));
// })

// const PORT = 8080

// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })


// const express = require('express');

// const app = express();

// app.get('/api/users',(req,res)=>{
//     res.json({
//         name:"suhail"
//     })
// })

// const middleware = (req, res, next) => {
//     console.log("/API called")
//     res.send('Router middleware');
//     next();
// };
// app.use((req,res,next) =>{
//     console.log(req.method)
//     next()
// })
// app.use('/api/users',middleware)


// const port = 8000;

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });




// const fs = require('fs')


// function resolvingPromise(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(new Date().toString());
//         },4000)
//     })
// }



// resolvingPromise().then((data)=>{
//     fs.writeFile('test.txt',data , (err)=>{
//         if(err){
//             console.log(err.stack)
//         }
//         console.log("date wited")
//     })
// })

// const fs = require('fs').promises;

// async function readWrite(){
//    try {
//     const conntent = await fs.readFile('test.txt', 'utf-8')
//     const reversed = conntent.split('').reverse().join('');
//     await fs.writeFile('test.txt',reversed)
//     console.log("Witten sucess")
//    } catch (error) {
//     console.log(error)
//    }
// }
// readWrite()

// async function fetchData() {
//     const api1 = Promise.resolve('Data from API 1')
//     const api2 = Promise.resolve('Data from API 2')

//     try {
//         const [data1, data2] = await Promise.all([api1, api2]);
//         console.log(data1)
//         console.log(data2)
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchData()

// const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'First'));
// const promise2 = new Promise(resolve => setTimeout(resolve, 500, 'Second'));

// Promise.allSettled([promise1,promise2]).then((data)=>console.log(data)).catch((error)=>console.log(error))


