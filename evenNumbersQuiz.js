// Write a function that return only the even numbers from an array.

// This will require a modulus operator, %. You can think about x % y as "the remainder when dividing x by y." For example, 1 % 2 === 1, 2 % 2 === 0, and 3 % 2 === 1.
// x % 2 === 0 means that a number is even.

// function evens(arr) {
//   let result = []
//   arr.forEach(value => {
//     if(value % 2 == 0){
//       result.push(value)
//     }
//   })
//   return result;
// }

function evens(arr) {
  return arr.filter(value => (value % 2) == 0)
}

console.log(evens([1, 2, 3, 4])) //Expected: [2, 4] OK!

>
console.log(evens([1, 2, 3])) //Expected: [2] but got: [2, 4]

>
console.log(evens([2, 4, 6, 8])) //Expected: [2, 4, 6, 8] but got: [2, 4]

>
console.log(evens([])) //Expected: [] but got: [2, 4]

>
// You must use filter.
console.log(evens.toString().includes('filter')) //Expected: true but got: false