// use forEach to write a function that behaves like filter

function filter(arr, callback) {
  let result = []
  arr.forEach(value => {
    if(callback(value) == true) {
      result.push(value)
    }
  })
  return result 
}


console.log(filter([1, 2, 3], num => num >= 0)) //Expected: [1, 2, 3] OK!


console.log(filter([1, 2, 3], num => num > 1)) //Expected: [2, 3] but got: [1, 2, 3]


console.log(filter([1, 2, 3], num => num > 5)) //Expected: [] but got: [1, 2, 3]


console.log(filter([null, undefined], num => true)) //Expected: [null, undefined] OK!


console.log(filter([], num => true)) //Expected: [] OK!


// You must use `forEach`.
console.log(filter.toString().includes('forEach')) //Expected: true 
