// Type Narrowing Example

function printValue(value: string | number) {

  if (typeof value === "string") {
    console.log("String length:", value.length)
  } 
  else {
    console.log("Number value:", value)
  }

}

printValue("TypeScript")
printValue(50)