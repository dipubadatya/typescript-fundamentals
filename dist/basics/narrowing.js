// Type Narrowing Example
function printValue(value) {
    if (typeof value === "string") {
        console.log("String length:", value.length);
    }
    else {
        console.log("Number value:", value);
    }
}
printValue("TypeScript");
printValue(50);
export {};
//# sourceMappingURL=narrowing.js.map