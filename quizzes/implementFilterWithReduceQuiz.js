// Use *reduce* to write a function that behaves like filter. You can do this with only one reduce and no other loops


function filter(arr, callback) {
  result = []
  arr.reduce((acc, current) => {
    // console.log("current", current)
    if(callback(current) == true) {
      result.push(current)
    }
  }, arr[0]
  )
  return result
}
  

console.log(filter([1, 2, 3], num => num >= 0)) //Expected: [1, 2, 3] OK!

console.log(filter([1, 2, 3], num => num > 1)) //Expected: [2, 3] but got: [1, 2, 3]

console.log(filter([1, 2, 3], num => num > 5)) //Expected: [] but got: [1, 2, 3]

console.log(filter([null, undefined], num => true)) //Expected: [null, undefined] OK!

console.log(filter([], num => true)) //Expected: [] OK!

// // You must use reduce.
console.log(filter.toString().includes('reduce')) //Expected: true 