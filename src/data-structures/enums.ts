// Enum example

enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
  Cancelled
}

let order = OrderStatus.Pending

function checkStatus(status: OrderStatus) {
  if (status === OrderStatus.Delivered) {
    console.log("Order completed")
  } else {
    console.log("Order still in progress")
  }
}

checkStatus(order)