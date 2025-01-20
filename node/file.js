const fs = require('fs')

// fs.writeFile('test.txt','HI suhail',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("Fitr has written!!!")
// })

const date = new Date().toDateString();
fs.writeFile('test.txt',date,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Written!!!!!")
})