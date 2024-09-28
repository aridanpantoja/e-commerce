import { ProductProps } from "../models/product"
import { ProductTypeProps } from "../models/product-type"
import { getStoredProducts } from "../utils"

const form = document.querySelector<HTMLFormElement>('#productForm')

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const imageInput = document.querySelector("#product-image") as HTMLInputElement
        const nameInput = document.querySelector("#product-name") as HTMLInputElement
        const priceInput = document.querySelector("#product-price") as HTMLInputElement
        const descriptionInput = document.querySelector("#product-description") as HTMLInputElement
        const typeInput = document.querySelector("#product-type") as HTMLSelectElement

        const newProduct: ProductProps = {
            image: imageInput.value,
            name: nameInput.value,
            description: descriptionInput.value,
            price: parseFloat(priceInput.value),
            type: typeInput.value as ProductTypeProps
        }

        addProduct(newProduct)
    })
}

function addProduct(product: ProductProps) {
    const storedProducts = getStoredProducts()
    storedProducts.push(product)
    localStorage.setItem("products", JSON.stringify(storedProducts))
}
