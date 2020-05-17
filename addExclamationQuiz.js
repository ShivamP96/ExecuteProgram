// Use **map** to write a function that appends a '!' to every element

function f(strings) {
  let result = strings.map(string => string+'!')
  return result
}

console.log(f(['a', 'b', 'c'])) //Expected: ['a!', 'b!', 'c!'] 

console.log(f(['A cat'])) //Expected: ['A cat!'] 

console.log(f(['A cat', 'And a dog'])) //Expected: ['A cat!', 'And a dog!']

console.log(f([''])) //Expected: ['!']

console.log((f)([])) //Expected: []

console.log(f.toString().includes('map')) //Expected: true 