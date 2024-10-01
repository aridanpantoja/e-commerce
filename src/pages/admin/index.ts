import { getStoredProducts, loadComponent, setStorage } from '../../lib/utils'
import { ProductProps, ProductTypeProps } from '../../types'
import { v4 as uuidv4 } from 'uuid'

export default class Admin {
    constructor() {
        loadComponent(this.render())

        const form = document.querySelector<HTMLFormElement>('#product-form')

        if (form)
            form.addEventListener('submit', (e) => {
                e.preventDefault()

                const imageInput = document.querySelector(
                    '#product-image'
                ) as HTMLInputElement
                const nameInput = document.querySelector(
                    '#product-name'
                ) as HTMLInputElement
                const priceInput = document.querySelector(
                    '#product-price'
                ) as HTMLInputElement
                const typeInput = document.querySelector(
                    '#product-type'
                ) as HTMLSelectElement

                const newProduct: ProductProps = {
                    image: imageInput.value,
                    name: nameInput.value,
                    price: parseFloat(priceInput.value),
                    type: typeInput.value as ProductTypeProps,
                    description: 'Oi',
                    id: uuidv4(),
                }

                this.addProduct(newProduct)
                this.updateProduct()
            })
    }

    render() {
        return `
            <h1>Admin Panel</h1>

            <form id="product-form">
                <input type="text" id="product-image" name="product-image" placeholder="Imagem" required>

                <input type="text" id="product-name" name="product-name" placeholder="Nome do produto" required>

                <input type="number" id="product-price" name="product-price" placeholder="Preço do produto" step="0.01" required>

                <select id="product-type" name="product-type" required>
                    <option value="" disabled>Tipo do produto</option>
                    <option value="solvente">Solvente</option>
                    <option value="reagente">Reagente</option>
                    <option value="vidraria">Vidraria</option>
                    <option value="indicador">Indicador</option>
                    <option value="equipamento">Equipamento</option>
                </select>

                <button type="submit">Confirmar</button>
            </form>
        `
    }

    addProduct(newProduct: ProductProps) {
        const productId = new URLSearchParams(window.location.search).get('id')
        const products = getStoredProducts()
        const productIndex = products.findIndex((item) => item.id === productId)

        if (products && productIndex === -1) {
            products.push(newProduct)
            setStorage(products)
        }
    }

    updateProduct() {
        const productId = new URLSearchParams(window.location.search).get('id')
        const products = getStoredProducts()
        const productIndex = products.findIndex((item) => item.id === productId)

        if (productIndex !== -1) {
            const product = products[productIndex]

            const imageInput = document.querySelector(
                '#product-image'
            ) as HTMLInputElement
            const nameInput = document.querySelector(
                '#product-name'
            ) as HTMLInputElement
            const priceInput = document.querySelector(
                '#product-price'
            ) as HTMLInputElement
            const typeInput = document.querySelector(
                '#product-type'
            ) as HTMLSelectElement

            product.image = imageInput.value
            product.name = nameInput.value
            product.price = parseFloat(priceInput.value)
            product.type = typeInput.value as ProductTypeProps

            setStorage(products)
        }
    }
}
