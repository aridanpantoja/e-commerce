import { Card as ImportedCard } from './index';
import { getStoredProducts, loadComponent, setStorage } from '../../lib/utils'
import { ProductProps } from '../../types/'
import { ProductTypeProps } from '../../types/'
import './styles.css'

export class Card {
    name: string
    price: number
    image: string
    description: string
    type: ProductTypeProps
    id: string

    constructor({ name, price, image, type, id, description }: ProductProps) {
        this.name = name
        this.price = price
        this.image = image
        this.type = type
        this.id = id
        this.description = description

        loadComponent(this.render(), '#products-list')
        this.addEventListeners()
    }

    render() {
        return `
            
                <div class="card">
                    <a href="/product?id=${this.id}">
                        <img src='${this.image}' alt=''/>
                        <h2>${this.name}</h2>
                        <p>${this.price}</p>
                        <p>${this.type}</p>
                        <p>${this.description}</p>
                    </a>

                    <div>
                        <a href="/admin?id=${this.id}">
                            <button>Editar</button>
                        </a>
                        
                        <button id="remove-${this.id}">Remover</button>
                    </div>
                </div>
        `
    }

    addEventListeners() {
        const removeButton = document.querySelector<HTMLButtonElement>(
            `#remove-${this.id}`
        )

        if (removeButton) {
            removeButton.addEventListener('click', () => this.handleRemove())
        }
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
