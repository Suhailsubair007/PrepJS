// ===========================
// Shallow Copy
// ===========================

let person = {
    name: "suhail subair",
    age: 22
};

let shallowCopy = person;
shallowCopy.name = "Akkukuttan";
console.log(person);
console.log(shallowCopy);

// ===========================
// Deep Copy
// ===========================

let person1 = {
    name: "suhail subair",
    age: 22
};

let deepCopy = JSON.parse(JSON.stringify(person1));
console.log(deepCopy);
deepCopy.age = 43;
console.log(deepCopy);
console.log(person1);

// ===========================
// Call , Apply, Bind
// ===========================

let name1 = {
    firstName: "suhail",
    secondName: "suhair",
}
function printName(hometown, state) {
    console.log(`${this.firstName} ${this.secondName} from ${hometown} , ${state}`)
}
let name2 = {
    firstName: "Riswana",
    secondName: "Subair"
}
printName.call(name2, "Kottayam", "Kerala");

// name1.printName.call(name2);
printName.apply(name1, ['Koattayam', "Kerala"])
printName.apply(name2, ["Mumbai", "Maharashtra"])

let printMyname = printName.bind(name1, "Kottayam", "Kerala");
printMyname()


// ===========================
// Function Declaration
// ===========================

function square(n) {
    return n * n;
}

// ===========================
// Function Expression
// ===========================

const x = function (n) { // anonymous function
    return n * n;
}

// ===========================
// First Class Functions
// ===========================
// Functions are first-class citizens, can act as variables, be passed as arguments, and return functions

// ===========================
// IIFE (Immediately Invoked Function Expression)
// ===========================

(function sample() {
    console.log("iifeeeeeeeee");
})();

// Example:
(function (x) {
    return (function () {
        console.log(x);
    })();
})(1);

// ===========================
// Closure
// ===========================

for (let i = 0; i < 3; i++) { // changed var to let to create block scope
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
