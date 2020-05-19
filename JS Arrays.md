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
## Slice (won't affect the original array)


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
If our begin index is past the end of the array, we get an empty result.
Think of it like this. The array [10, 20] has indexes 0 and 1. So what's in indexes 2 through 3? There's nothing there. The slice of those indexes is empty.

``` javascript
[10, 20].slice(2, 3)
// ->[]

```
With no arguments, **slice** will slice all elements of the array. This effecitvely copies the array. If we change the orginal, it won't affect the copy. Likewise, if we change the copy it won't affect the original

``` javascript

var orig = [10, 20, 30]
var copy = orig.slice()
copy[0] = 1
orig
// -> [10, 20, 30]

var orig = [10, 20, 30]
var copy = orig.slice()
orig[0] = 1
copy
// -> [10, 20, 30] 

```
Slice is quite complex, but copying arrays is its most common use.


---
## Slice with negative arguments (slice uses indecies)
We can **slice** from the end of the array by using negative indexes. You can think of a negative index **-2** as **array.length - 2**. Or you can think of it as "two away from the end.

This example means "slice from the second-to-last element to the end"

``` javascript
const nums = [10, 20, 30, 40, 50]
nums.slice(nums.length - 2)
// -> [40, 50]

[10, 20, 30, 40, 50].slice(-2)
// -> [40, 50]

[10, 20].slice(-2)
// -> [10, 20]
```

We already saw what happens when we slice past the end of the array.

``` javascript
 [10, 20].slice(4, 5)
// -> [] 

```
With negative indexes, we can also slice before the beginning of the arrya. The result will only include elements in the original array. It won't invent additional elements to satisfy our out-of-bounds index. 

``` javascript
[10, 20].slice(-100)
// ->[10, 20]
```

Both **begin** and **end** can be negative. Rememeber that the **end** element isn't included in the slice.

``` javascript

[10, 20, 30].slice(-3, -1)
// -> [10, 20]


[10, 20, 30, 40, 50].slice(-3, -1)
// -> [30, 40]

```
We can mix positive and negative **begin** and **end** indexes.

``` javascript
[10, 20, 30, 40, 50].slice(1, -1)
// -> [20, 30, 40]

[10, 20, 30, 40, 50].slice(-3, 4)
// -> [30, 40]

```


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

---

## Concat (original array isn't changed)

In many languages, + will combine two arrays. That's not true on javascript. Trying to do array1 + array2 is usually a mistake. Javascript willl convert the arrays into strings before adding them.

``` javascript

[1, 2].toString()
// ->'1,2' 

[1, 2] + [3]
// -> '1,23'


[1, 2] + [3, 4]
// -> '1,23,4'

[1,2,3] + [4,5,6]
// -> '1,2,34,5,6'
```

However we can combine arrays properly with **concat**. It stands for concatenate, which means "link together". It creates a new array containing all of the elements from the old arrays. 


``` javascript
[1, 2].concat([3, 4])
//-> [1, 2, 3, 4] 
```
**concat** takes multiple arguments, so we can combine many arrays if needed:

``` javascript
[1,2].concat([3,4],[5,6])
// -> [1,2,3,4,5,6]
```

**concat** can also be used to add single elements to the end of an array. If its argument isn't an array, it will be added as a single element. 

``` javascript


[1, 2].concat(3)
// ->[1, 2, 3]

```

**concat** builds and returns a new array.  The original array aren't changed. 

``` javascript

const a1 = [1,2]
const a2 = [3,4]
a1.concat(a2);
a1
// -> [1,2]

```

---
## Map

**map** calls a function on each element of an array. It returns a new array of the values returned from those function calls.

``` javascript
[1, 2, 3].map(num => num * 10)
// -> [10, 20, 30]


['a', 'b', 'c'].map(x => x.toUpperCase())
// -> ['A', 'B', 'C']
```
**map** doesn't change the original array

``` javascript
const nums = [1,2,3]
nums.map(num => num * 10)
nums[0]
// -> 1
```
In a previous lesson, we built an array of people's names using forEach. Here is that example again

``` javascript

const people = [
  {name: 'Amir'},
  {name: 'Betty'},
]
const names = []
people.forEach(person => {
  names.push(person.name)
})
names
// -> ['Amir', 'Betty']
```

There is an easier way. With **map** we don't need to create and modify a new array/ Instead we can build the new array directly.

``` javascript
const people = [
  {name: 'Amir'},
  {name: 'Betty'}
]
people.map(person => person.name)
```

---

## Join

Sometimes we want to turn an array of strings  into a single string. We can **join** them together.

``` javascript

['a','b','c'].join('')
// -> 'abc'


['Amir', 'Betty'].join('')
// -> 'AmirBetty'
```

If we omit **join's** argument, the strings are joined with **','** by default/

``` javascript

['Amir', 'Betty'].join()
// -> 'Amir,Betty'

```