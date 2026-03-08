// Arrays with strict types

const numbers: number[] = [10, 20, 30, 40]

const users: string[] = ["Aman", "Rahul", "Sita"]

numbers.push(50)

users.forEach(user => {
  console.log(user.toUpperCase())
})