# JS Arrays

## Stack
We can add elements to the end of an array with **push**.


``` javascript
>var a = [1, 2]
a.push(3)
a
=>[1, 2, 3] 
```

push returns the array's length, including the newly-pushed element

``` javascript
>var a = ['a', 'b']
a.push('c')
3 


>var a = ['a', 'b', 'c', 'd']
a.push('e')
5 
```

**pop** is the opposite of push. It removes the last element from the array.

``` javascript
>var a = [1, 2, 3]
a.pop()
a
[1, 2] 
```

pop returns the element that was removed.

``` javascript
>var a = [1, 2, 3]
a.pop()
3 
```
Some array methods return a new array. push and pop do not. Instead, they change the array itself each time they're called.

``` javascript
>var a = [1, 2, 3]
a.pop()
a.pop()
a
[1] 

>var a = [1, 2, 3]
a.pop()
a.push('a')
a
[1, 2, 'a'] 
```

---
## Slice


Sometimes we want to access a subsection of an array. For that, we use the slice method. It takes an argument begin, which is the index to start from.

``` javascript
>[10, 20, 30, 40, 50].slice(3)
// -> [40, 50] 


['a', 'b', 'c'].slice(1)
// -> ['b', 'c'] 

```
Slice can take a second argument, **end**. It slices all elements from **begin** up to **end**, but not including **end**

``` javascript
[10, 20, 30, 40, 50].slice(1, 3)
// -> [20, 30]
```

We can **slice** beyond the end of the array. It gives the same result as slicing right up to the last element.

``` javascript
[10, 20].slice(0, 3)
// -> [10, 20] 

```
If our begin index is past the end of the array, we get an empty result

---
## For Each

forEach executes a function once for each element in an array. Lts use it to sum an array of numbers

``` javascript

var nums = [1,2,3]
var sum = 0
nums.forEach(num => {
  sum = sum + num
})
sum

// -> 6

```

In the next example we want to build a list of people's names. We use a *for* loop to add each name to an array. This reqires looking elements up by their indexes i.

``` javascript
var people = [
  {name: 'Amir'},
  {name: 'Betty'}
];
var names = [];
for (var i = 0; i < people.length; i++ ){
  names.push(people[i].name)
}
names
```

forEach lets us write the same code without the index variable i. We pass a function to forEach, which runs the function on each element.

``` javascript
var people = [
  {name: 'Cindy'},
  {name: 'Dalili'}
]
var names = [];
people.forEach(person => {
  names.push(person.name)
})
names;

```

We Can modify the arrays elements during the forEach

``` javascript
'cat'.toUpperCase()
'CAT'

var people = [
  {name:'Ebony'},
  {name: 'Fang'}
]
people.forEach(person => {
  person.name = person.name.toUpperCase()
})
people[0].name

```

The second argument to forEach's callback is the item's index.

``` javascript
var names = ['Gabriel', 'Hana']
var userIDs = [10, 11]
var result = ''
names.forEach((name, index) => {
  result += name + userIDs[index]
})
result
// => 'Gabriel10Hana11'
```

