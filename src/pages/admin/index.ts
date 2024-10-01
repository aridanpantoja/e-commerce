import { getStoredProducts, loadComponent, setStorage } from '../../lib/utils'
import { ProductProps, ProductTypeProps } from '../../types'
import { v4 as uuidv4 } from 'uuid'
import './styles.css'

export default class Admin {
    constructor() {
        loadComponent(this.render())

        const form = document.querySelector<HTMLFormElement>('#product-form')

        if (form)
            form.addEventListener('submit', (e) => {
                e.preventDefault()

                const nameInput = document.querySelector(
                    '#product-name'
                ) as HTMLInputElement
                const imageInput = document.querySelector(
                    '#product-image'
                ) as HTMLInputElement
                const priceInput = document.querySelector(
                    '#product-price'
                ) as HTMLInputElement
                const typeInput = document.querySelector(
                    '#product-type'
                ) as HTMLSelectElement
                const descriptionInput = document.querySelector(
                    '#product-description'
                ) as HTMLInputElement

                const newProduct: ProductProps = {
                    image: imageInput.value,
                    name: nameInput.value,
                    price: parseFloat(priceInput.value),
                    type: typeInput.value as ProductTypeProps,
                    description: descriptionInput.value,
                    id: uuidv4(),
                }

                this.addProduct(newProduct)
                this.updateProduct()
            })
    }

    render() {
        return /*HTML*/ `
            <h1>Admin Painel</h1>

            <form id="product-form">
                <input type="text" id="product-name" name="product-name" placeholder="Nome do produto" required>
                
                <input type="text" id="product-image" name="product-image" placeholder="URL da imagem" required>

                <input type="number" id="product-price" name="product-price" placeholder="Preço do produto" step="0.01" required>

                <select id="product-type" name="product-type" required>
                    <option value="" disabled selected>Tipo do produto</option>
                    <option value="solvente">Solvente</option>
                    <option value="reagente">Reagente</option>
                    <option value="vidraria">Vidraria</option>
                    <option value="indicador">Indicador</option>
                    <option value="equipamento">Equipamento</option>
                </select>

                <textarea type="text" id="product-description" name="product-description" placeholder="Descrição do produto"></textarea>

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

            const nameInput = document.querySelector(
                '#product-name'
            ) as HTMLInputElement
            const imageInput = document.querySelector(
                '#product-image'
            ) as HTMLInputElement                
            const priceInput = document.querySelector(
                '#product-price'
            ) as HTMLInputElement
            const typeInput = document.querySelector(
                '#product-type'
            ) as HTMLSelectElement
            const descriptionInput = document.querySelector(
                '#product-description'
            ) as HTMLInputElement

            product.image = imageInput.value
            product.name = nameInput.value
            product.price = parseFloat(priceInput.value)
            product.type = typeInput.value as ProductTypeProps
            product.description = descriptionInput.value

            setStorage(products)
        }
    }
}
