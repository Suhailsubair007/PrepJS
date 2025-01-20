//Neted Array Sum 

function nestedArray(arr){
    let sum = 0
    for(let element of arr){
        if(Array.isArray(element)){
            sum += nestedArray(element)
        }else if(typeof element === 'number'){
            sum +=element
        }
    }
    return sum
}
let array =  ["a", [null, undefined], ["b", {}]];
console.log(nestedArray(array))

