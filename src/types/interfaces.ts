// Interface for a product

interface Product {
  id: number
  title: string
  price: number
  inStock: boolean
}

const laptop: Product = {
  id: 101,
  title: "MacBook Pro",
  price: 200000,
  inStock: true
}

function displayProduct(product: Product): void {
  console.log(`${product.title} costs ₹${product.price}`)
}

displayProduct(laptop)