// Sum the squares of the odd numbers in an array. use map, filter and reduce together

// A hint: x is odd if x % 2 == 1


function f(arr) {
  let filteredArray = [];
  let result = 0;
   arr.filter(value => value % 2 == 1).map(value => filteredArray.push(value))
  //  console.log("Filtered Array: ",filteredArray);
   result = filteredArray.reduce((acc, current) => {
    //  console.log("current", current)
     return acc + (current * current)
   }, 0)
   return result
}



console.log(f([0, 0])) //Expected: 0 OK!

console.log(f([3])) //Expected: 9 but got: 0

console.log(f([4])) //Expected: 0 OK!

console.log(f([5])) //Expected: 25 but got: 0

console.log(f([1, 2])) //Expected: 1 but got: 0

console.log(f([1, 2, 3])) //Expected: 10 but got: 0

console.log(f([1, 2, 3, 4, 5])) //Expected: 35 but got: 0

console.log(f([2, 2, 2, 2])) //Expected: 0 OK!

console.log(f([])) //Expected: 0 OK!

// You must use filter.
console.log(f.toString().includes('filter')) //Expected: true but got: false

// You must use map.
console.log(f.toString().includes('map')) //Expected: true but got: false

// You must use reduce.
console.log(f.toString().includes('reduce')) //Expected: true 