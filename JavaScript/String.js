// PascalCase to snake_case
// =======================

function pascalTosnake(str) {
    let sneak = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (char === char.toUpperCase() && i > 0) {
            sneak += '_';
        }
        sneak += char.toLowerCase()
    }
    return sneak
}

const pascalString = "PascalCaseStringEhhhh";
console.log(pascalTosnake(pascalString))

// Vowels Count
// ============

function vowelsCOunt(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}

console.log(vowelsCOunt("SuhailSUbairAQA"))

// Reverse String
// ==============

function reverseString(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
console.log(reverseString('suhail'))

// Check String Palindrome or Not
// ==============================

function palindromeString(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return str === reversed
}
console.log(palindromeString('malayalam'))

// Two Strings Anagram or Not
// ==========================

function anagram(str1, str2) {
    if (str1.length !== str2.length) return false
    let freq = {}
    for (let char of str1) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for(let char of str2){
        if(!freq[char]) return false
        freq[char]--;
    }
    return true
}
console.log(anagram('suhaillll','ulllls'))

// Find First Non-Repeating Character
// ==================================

function findNOnRepeating(str){
    let count = {}
    for(let char of str){
        count[char] = (count[char] || 0) + 1;
    }
    for(let char of str){
        if(count[char] === 1) return char
    }
    return null
}

console.log(findNOnRepeating('aabbccs'))


//Compress String
//================

function compress(str){
    let res = ''
    let count = 1
    for (let i = 0; i < str.length; i++) {
        if(str[i] === str[i+1]){
            count++
        }else{
            res +=str[i]+ count
            count = 1
        }        
    }
    return res
}

console.log(compress('aaabbcabbb'))