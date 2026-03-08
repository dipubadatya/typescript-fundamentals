// Example: typing objects in TypeScript

type User = {
  id: number
  name: string
  email: string
  isActive: boolean
}

const user1: User = {
  id: 1,
  name: "Vijay",
  email: "vijay@email.com",
  isActive: true
}

function printUser(user: User): void {
  console.log(`User: ${user.name} (${user.email})`)
}

printUser(user1)