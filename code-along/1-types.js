// 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
  
// 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
console.log('hello, world')
console.log('hello, ben')

let firstName = 'Ben1'


let greeting = 'hello, ' + firstName
console.log(greeting)

//let output = 'hello, ben2'

let x = 3
console.log(x)

let y = 42
console.log(y)

let z = x + y
console.log(z)

y = 6
console.log(y)

let dinner = 'tacos' //string
let quantity = 5 //number
let hasGuacamole = true //bolean

let output 
// output = 'Ordering ' + quantity + ' ' + dinner + " tonight"
output = `Ordering ${quantity} ${dinner} tonight` //This is a backtick` not the usual'
//  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

/*
  this code does the work of writing the output to screen...
  so leave it alone :) this code expects a variable named
  'output' to be declared
*/
document.querySelector('.output').innerHTML = output