import { products } from "./data"
import { ProductProps } from "./models/product"

export function getStoredProducts() {
    let storedProducts = localStorage.getItem("products")

    if (!storedProducts) {
        localStorage.setItem("products", JSON.stringify(products))
        return products
    } else {
        return JSON.parse(storedProducts) as ProductProps[]
    }
}