// Function with default parameter
function createUser(name, age = 18) {
    return `${name} is ${age} years old`;
}
console.log(createUser("vijay"));
console.log(createUser("Rahul", 25));
// Optional parameters
function greetUser(name, message) {
    if (message) {
        console.log(`${message}, ${name}`);
    }
    else {
        console.log(`Hello ${name}`);
    }
}
greetUser("vijay");
greetUser("vijay", "Welcome back");
// Arrow function with return type
const addNumbers = (a, b) => {
    return a + b;
};
console.log(addNumbers(5, 7));
export {};
//# sourceMappingURL=functionsAdvanced.js.map