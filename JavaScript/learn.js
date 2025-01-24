// // Call by Value and Call by Reference Example

// // Call by Value
// let a = 10;
// let b = a;
// b = 20;
// console.log(a) // Output: 10
// console.log(b) // Output: 20

// // Call by Reference
// let obj1 = {
//     name: "suhail",
//     age: 33
// }
// let obj2 = obj1;

// obj2.age = 11;
// console.log(obj1) // Output: { name: 'suhail', age: 11 }
// console.log(obj2) // Output: { name: 'suhail', age: 11 }

// //Map and filter 

// let arr = [1,2,3,4,5,6]
// let squared = arr.map((x)=>x*2);
// console.log(squared)

// let arr1 = [1,2,3,4,5,6]
// let filtered = arr1.filter(x => x%2 ===0)
// console.log(filtered)

// let arr2 = [1,2,3,4,5,6,7,8]
// arr2.forEach((x)=>{
//     console.log(x*2)
// })


// //Call Applay Bind

// let person = {
//     name:"suhail",
//     age:23
// }

// function greet(name,puctuation){
//     console.log(`HI ${this.name}`)
// }

// //Memoization example

// function fibonacciMemoized() {
//     const cache = {}; // To store previously calculated results
  
//     function fib(n) {
//       if (n in cache) {
//         return cache[n]; // Return cached result if available
//       }
//       if (n <= 1) {
//         return n;
//       }
//       const result = fib(n - 1) + fib(n - 2);
//       cache[n] = result; // Store the result in cache
//       return result;
//     }
  
//     return fib;
//   }
  
//   const fibonacci = fibonacciMemoized();
//   console.log(fibonacci(40)); // Much faster due to caching
  
  


