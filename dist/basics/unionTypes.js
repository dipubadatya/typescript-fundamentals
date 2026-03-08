"use strict";
// Union Types
Object.defineProperty(exports, "__esModule", { value: true });
let userId;
userId = 101;
console.log("User ID:", userId);
userId = "A101";
console.log("User ID:", userId);
// Function using union
function printId(id) {
    console.log("ID:", id);
}
printId(123);
printId("ABC123");
//# sourceMappingURL=unionTypes.js.map