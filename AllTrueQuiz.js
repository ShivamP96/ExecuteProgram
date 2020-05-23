// Write a function that returns true if all array elements are true. Use reduce

// (Mind the difference between JavaScript's == and ===.)


function allTrue(values) {
  if (values.length == 0) {
    return true;
  }
  return values.reduce((acc, current) => acc && current)
  
}

console.log(allTrue([true])) //Expected: true

console.log(allTrue([false])) //Expected: false 


console.log(allTrue([true, false])) //Expected: false 
console.log(allTrue([false, true])) //Expected: false 
console.log(allTrue([false, false])) //Expected: false 
console.log(allTrue([true, true]))//Expected: true OK!

console.log(allTrue([])) //Expected: true OK!

// You must use reduce.
console.log(allTrue.toString().includes('reduce')) //Expected: true 

