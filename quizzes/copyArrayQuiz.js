//Write a function copyArray that returns a copy of an array. Changes to the copy shouldn't affect the original array and vice-versa.

function copyArray(array) {
  return array.slice();
}



console.log(copyArray)([]) //Expected: []

console.log(copyArray(['a', 'b'])) //Expected: ['a', 'b']

console.log(copyArray([null, undefined, false])) //Expected: [null, undefined, false]

const original = ['a', 'b']
const copy = copyArray(original)
copy.push('c')
console.log(original) //Expected: ['a', 'b'] 

const original = ['a', 'b']
const copy = copyArray(original)
original.push('c')
console.log(copy) //Expected: ['a', 'b']


// You must use slice.
console.log(copyArray.toString().includes('slice')) //Expected: true