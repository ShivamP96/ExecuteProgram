// Write a function that sorts words by length in ascending order. 

function sortByLength(words){
return words.sort((a,b) => a.length - b.length)
}


const array = []
sortByLength(array)
console.log(array) //Expected: [] OK!

const array = ['z']
sortByLength(array)
console.log(array) //Expected: ['z'] OK!

const array = ['a', 'b']
sortByLength(array)
console.log(array) //Expected: ['a', 'b'] OK!

const array = ['a', 'big', 'ox']
sortByLength(array)
console.log(array) //Expected: ['a', 'ox', 'big'] but got: ['a', 'big', 'ox']

const array = ['zzz', 'yy', 'x']
sortByLength(array)
console.log(array) //Expected: ['x', 'yy', 'zzz']