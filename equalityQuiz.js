// Write a function eql that checks if two arrays are equal. It doesn't need to work for arrays containing arrays, like [[1], [2]]. Likewise for arrays containing objects like [{a: 1}, {b: 2}]. It only needs to work for arrays of simple values like [1, 2, 3].

function eql (arr1, arr2){
  let result = [];
  arr1.forEach((value, index) => {
    if (value === arr2[index]){
      result.push(value)
    }
  })
  if ((arr1.length == 0 && arr2.length == 0 )){
    return true
  }
  else if (arr1.length == 0){
    return false;
  } else if(result.length == arr1.length){
    return true
  }
  else {
    return false
  }
}


// console.log(eql([1], [1])) //Expected: true 
// console.log(eql([1], [2])) //Expected: false
// console.log(eql([1, 2, 3, 4], [1, 2, 3, 4])) //Expected: true
// console.log(eql(['a', 'b'], ['a', 'b'])) //Expected: true
// console.log(eql(['b', 'a'], ['a', 'b'])) //Expected: false
// console.log(eql(['a', 'b'], ['a', 'c'])) //Expected: false
// console.log(eql(['a', 'b'], ['a'])) //Expected: false
console.log(eql([], [])) //Expected: true
console.log(eql([], [1])) //Expected: false
console.log(eql([1], [])) //Expected: false
// console.log(eql([1], ['1'])) //Expected: false
// // // You must use forEach.
// console.log(eql.toString().includes('forEach')) //Expected: true