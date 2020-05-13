// Use slice to write a function takeFirst(arr, n). It should return a new array of the first n elements of arr. If n is larger than the array's length, return a copy of the array. Don't worry about negative n.

function takeFirst(arr, n) {

  return arr.slice(0,n)
}

console.log(takeFirst([1, 2, 3], 0)) //Expected: []

console.log(takeFirst([1, 2, 3], 1)) //Expected: [1]

console.log(takeFirst([1, 2, 3], 2)) //Expected: [1, 2]

console.log(takeFirst([1, 2, 3], 5)) //Expected: [1, 2, 3]

const original = [1, 2, 3]
const copy = takeFirst(original, 2)
original.push(3)
console.log(copy) //Expected: [1, 2]

// // You must use slice.
console.log(takeFirst.toString().includes('slice'))  //Expected: true