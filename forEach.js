 // #1 

 var nums = [1,2,3];
 var sum = 0;

 nums.forEach(num => {
   sum = sum + num 
 })
 

 console.log("#1",sum)

 // #2

 var people = [
   {name: 'Amir'},
   {name: 'Betty'}
 ]

 var names = [];
 for (var i = 0; i<people.length; i++){
   names.push(people[i].name)
 } 

 console.log("#2",names)

 // #3 Doing #2 but with forEach

 var people1 = [
   {name: 'Cindy'},
   {name: 'Dalili'}
 ];
 var names1 = []
people1.forEach(person => {
  names1.push(person.name)
})

console.log("#3", names1)

// #4 Modifying original array with .toUpperCase()

var people2 = [
  {name: 'Ebony'},
  {name: 'Fang'}
];

// since we are modifying original array we don't need a new names variable

people2.forEach(person => {

  person.name = person.name.toUpperCase()
})
console.log('#4', people2[0].name);


// #5 Using forEach second callback feature index

var names = ['Gabriel', 'Hana'];
var userIDs = [10,11];

var result = '';

names.forEach((name, index) => {
  result += name + userIDs[index]
})

console.log("#5", result)


var people = [
  {name: "Cindy"},
  {name: 'Dalili'}
];
var names = [];
people.forEach(person => {
  names.push(person.name)
})
names