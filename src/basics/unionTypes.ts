// Union Types

let userId: string | number

userId = 101
console.log("User ID:", userId)

userId = "A101"
console.log("User ID:", userId)

// Function using union

function printId(id: number | string) {
  console.log("ID:", id)
}

printId(123)
printId("ABC123")