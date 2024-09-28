import { ProductProps } from "./models/product";
import { getStoredProducts } from "./utils";

const wrapper = document.querySelector("#app")
const storedProducts = getStoredProducts()

storedProducts.forEach((product: ProductProps) => {
    const card = `
        <div>
            <img src="${product.image}" alt="${product.name}" />
            <p>${product.name}</p>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <p>${product.type}</p>
        </div>
    `
    
    if (wrapper) {
        wrapper.innerHTML += card
    }
})