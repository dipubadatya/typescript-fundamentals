// Function with default parameter

function createUser(name: string, age: number = 18): string {
  return `${name} is ${age} years old`
}

console.log(createUser("vijay"))
console.log(createUser("Rahul", 25))


// Optional parameters

function greetUser(name: string, message?: string) {
  if (message) {
    console.log(`${message}, ${name}`)
  } else {
    console.log(`Hello ${name}`)
  }
}

greetUser("vijay")
greetUser("vijay", "Welcome back")


// Arrow function with return type

const addNumbers = (a: number, b: number): number => {
  return a + b
}

console.log(addNumbers(5, 7))