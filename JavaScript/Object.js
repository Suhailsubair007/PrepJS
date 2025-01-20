function nestedObject(obj){
    let sum=0;
    for(let key in obj){
        const value = obj[key]
        if(typeof value === 'number' ){
            sum += value;
        }else if( typeof obj === 'object' && obj !== null){
            sum += nestedObject(value);
        }
    }
    return sum
}
const objWithArray = { a: 1, b: { c: [2, 3], d: 4 } };
console.log(nestedObject(objWithArray)); // Output: 10