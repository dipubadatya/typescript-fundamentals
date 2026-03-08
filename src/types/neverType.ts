// never type

function throwError(message: string): never {
  throw new Error(message)
}

// example

function infiniteLoop(): never {
  while (true) {}
}