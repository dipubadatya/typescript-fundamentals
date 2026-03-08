"use strict";
// Enum example
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
let order = OrderStatus.Pending;
function checkStatus(status) {
    if (status === OrderStatus.Delivered) {
        console.log("Order completed");
    }
    else {
        console.log("Order still in progress");
    }
}
checkStatus(order);
//# sourceMappingURL=enums.js.map