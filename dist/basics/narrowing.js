"use strict";
// Type Narrowing Example
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=narrowing.js.map