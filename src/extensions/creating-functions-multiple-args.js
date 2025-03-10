// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function numBetween(min, max) {
  const arr = [min]
  for (let i = min + 1; i < max; i++) {
    arr.push(i)
  }
  arr.push(max)
  return arr
}
// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function exaggerator(string, num) {
  string = string.toUpperCase()
  for (let i = 0; i < num; i++) {
    string += '!'
  }
  return string
}
// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function tickTocker(time, mins) {
  const separator = time.indexOf(':')
  let hours = parseInt(time.substring(0, separator))
  let minutes = parseInt(time.substring(separator + 1))

  hours += Math.floor((minutes + mins) / 60)
  minutes = (minutes + mins) % 60
  hours = hours % 24

  if (hours === 0) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  return hours + ':' + minutes
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numBetween, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exaggerator, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: tickTocker // etc
}
