// Use map to write a function that squares every number in a list.

function square(nums) {
  
return (nums.map(num => num * num ))
}

console.log(square([0, 0, 0])) //Expected: [0, 0, 0]

console.log(square([1, 2, 3])) //Expected: [1, 4, 9]

console.log(square([8, 12, 4])) //Expected: [64, 144, 16] 

console.log(square([])) //Expected: []

// You must use map.
console.log(square.toString().includes('map')) //Expected: true 