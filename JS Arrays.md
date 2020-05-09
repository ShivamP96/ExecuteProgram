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
[40, 50] 

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