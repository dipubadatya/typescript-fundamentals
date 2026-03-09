// Type alias example
type Car = {
  brand: string
  year: number
}

// Interface example
interface Bike {
  brand: string
  year: number
}

const myCar: Car = {
  brand: "Toyota",
  year: 2022
}

const myBike: Bike = {
  brand: "Yamaha",
  year: 2023
}

console.log(myCar)
console.log(myBike)