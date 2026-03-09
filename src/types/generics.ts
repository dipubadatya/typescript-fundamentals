function identity<T>(value: T): T {
  return value
}

const num = identity<number>(10)
const text = identity<string>("Hello")

console.log(num)
console.log(text)