import { ProductProps } from '../../models/product'
import { ProductTypeProps } from '../../models/product-type'
import { getStoredProducts, loadComponent, setStorage } from '../../lib/utils'
import './Form.css'
import { v4 as uuidv4 } from 'uuid'

export class Form {
    constructor() {
        loadComponent(this.render(), '#form-wrapper')

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
                    id: uuidv4(),
                }

                this.addProduct(newProduct)
            })
    }

    render() {
        return `
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
                </select>

                <button type="submit">Adicionar Produto</button>
            </form>
        `
    }

    addProduct(newProduct: ProductProps) {
        const products = getStoredProducts()

        if (products) {
            products.push(newProduct)
            setStorage(products)
        }
    }
}
