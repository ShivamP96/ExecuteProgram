// Write a function fillDynamically(value, length). It should construct a new array of length filled with value

function fillDynamically(value, length) {
  let size = length;
  return new Array(size).fill(value)
}


console.log(fillDynamically('d', 3)) //Expected: ['d', 'd', 'd'] OK!


console.log(fillDynamically('d', 1)) //Expected: ['d'] but got: ['d', 'd', 'd']


console.log(fillDynamically('a', 4))
//Expected: ['a', 'a', 'a', 'a'] but got: ['d', 'd', 'd']

>console.log(fillDynamically('d', 0))
//Expected: [] but got: ['d', 'd', 'd']


// You must "new" a fixed-size array.
console.log(fillDynamically.toString().includes('new Array'))
//Expected: true but got: false