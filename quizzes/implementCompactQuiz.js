// Write a function compact that removes all nulls from an array. It should return an array of all non-null values from the original array.

// Watch out for the difference between == and ===. == is "double equals", a loose comparison. === is "triple equals", a strict comparison.

function compact(arr) {
  let result = arr.filter(value => value !== null )

  return result
}


console.log(compact([null])) //Expected: [] OK!


console.log(compact([1, 2, 3])) //Expected: [1, 2, 3] but got: []


console.log(compact([1, null, 2, 3, null])) //Expected: [1, 2, 3] but got: []


console.log(compact([])) //Expected: [] OK!


console.log(compact([undefined])) //Expected: [undefined] but got: []


console.log(compact([false, undefined])) //Expected: [false, undefined] but got: []

// You must use filter.
console.log(compact.toString().includes('filter')) //Expected: true but got: false