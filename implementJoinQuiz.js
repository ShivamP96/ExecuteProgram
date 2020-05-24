// Using reduce, write a function that behaves like join. Joining [] should produce ''

function join(arr, separator) {
  if (arr.length == 0){
    return ''
  }

  return arr.reduce((joined, current) => joined + separator + current)
}



console.log(join(['a'], ',')) //Expected: 'a' 

console.log(join(['a', 'b'], ',')) //Expected: 'a,b'

console.log(join(['a', 'b', 'c'], '')) //Expected: 'abc' 

console.log(join(['a', 'b', 'c', 'd'], 'x')) //Expected: 'axbxcxd' 

console.log(join(['a', 'b'], 'COMMA')) //Expected: 'aCOMMAb'

console.log(join(['', '', ''], ',')) //Expected: ',,' 

console.log(join([], ',')) //Expected: ''

// You must use reduce.
console.log(join.toString().includes('reduce')) //Expected: true