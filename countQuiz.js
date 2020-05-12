// Use forEach to write a function count(arr, callback). It should return the number of elements for which callback is true.

function count(arr, callback) {
  let count=[];
  for(let i = 0; i<arr.length;i++){
    if (callback(arr[i]) == true){
      count.push(i)
    }
  }
  return count.length
}

console.log(count([1, 2, 3, 4], (e) => e === 3))
console.log(count([1, 2, 3, 4], (e) => e > 1))
console.log(count([2, 1, 4, 5, 2, 8], (e) => e === 2))
console.log(count(['a', 'b'], (e) => e === 'd'))
console.log(count([], (e) => e === 'd'))
// You must use forEach
console.log(count.toString().includes('forEach'))


// using forEach
function count(arr, callback) {
  let result=[];
  arr.forEach(value => {
    if (callback(value) == true){
      result.push(value);
    }
  })
  return result.length
}