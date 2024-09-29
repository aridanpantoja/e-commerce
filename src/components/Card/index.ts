import { getStoredProducts, loadComponent, setStorage } from '../../lib/utils'
import { ProductProps } from '../../models/product'
import { ProductTypeProps } from '../../models/product-type'
import './Card.css'

export class Card {
    name: string
    price: number
    image: string
    type: ProductTypeProps
    id: string
    options: boolean

    constructor(
        { name, price, image, type, id }: ProductProps,
        options: boolean = false
    ) {
        this.name = name
        this.price = price
        this.image = image
        this.type = type
        this.id = id
        this.options = options

        loadComponent(this.render(), '#products-list')

        if (this.options) {
            this.addEventListeners()
        }
    }

    render() {
        return `
            <div class="card">
                <h2>${this.name}</h2>
                <p>${this.price}</p>
                <p>${this.image}</p>
                <p>${this.type}</p>

                ${
                    this.options
                        ? `<div>
                        <button id="edit-${this.id}">Editar</button>
                        <button id="remove-${this.id}">Remover</button>
                    </div>`
                        : ''
                }
            </div>
        `
    }

    addEventListeners() {
        const editButton = document.querySelector<HTMLButtonElement>(
            `#edit-${this.id}`
        )
        const removeButton = document.querySelector<HTMLButtonElement>(
            `#remove-${this.id}`
        )

        if (editButton) {
            editButton.addEventListener('click', () => this.handleEdit())
        }

        if (removeButton) {
            removeButton.addEventListener('click', () => this.handleRemove())
        }
    }

    handleEdit() {
        console.log(`Editando o produto com ID: ${this.id}`)
    }

    handleRemove() {
        const products = getStoredProducts()
        const productIndex = products.findIndex((item) => item.id === this.id)

        if (productIndex !== -1) {
            products.splice(productIndex, 1)
        }

        setStorage(products)
    }
}
