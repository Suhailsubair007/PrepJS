//Neted Array Sum 

function nestedArray(arr) {
    let sum = 0
    for (let element of arr) {
        if (Array.isArray(element)) {
            sum += nestedArray(element)
        } else if (typeof element === 'number') {
            sum += element
        }
    }
    return sum
}
let array = ["a", [null, undefined], ["b", {}]];
console.log(nestedArray(array))

//Flaten a nested array 

function flatNested(arr) {
    let res = []
    const flatted = (nested) => {
        for (let item of nested) {
            if (Array.isArray(item)) {
                flatted(item)
            } else {
                res.push(item)
            }

        }
    }
    flatted(arr)
    return res
}

console.log(flatNested([1, [2, [3, [4, 5]]], 6]))