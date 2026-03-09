// Interface for a product
const laptop = {
    id: 101,
    title: "MacBook Pro",
    price: 200000,
    inStock: true
};
function displayProduct(product) {
    console.log(`${product.title} costs ₹${product.price}`);
}
displayProduct(laptop);
export {};
//# sourceMappingURL=interfaces.js.map