// Type Alias for a user object

type User = {
  id: number
  username: string
  email: string
  isAdmin: boolean
}

const adminUser: User = {
  id: 1,
  username: "vijay",
  email: "vijay@email.com",
  isAdmin: true
}

function printUser(user: User): void {
  console.log(`${user.username} (${user.email})`)
}

printUser(adminUser)