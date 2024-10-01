import { formatMoney, getStoredProducts, loadComponent, setStorage } from '../../lib/utils'
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
                    <a href="/product?id=${this.id}" class="card__image">
                        <img src='${this.image}' alt="${this.name}" class="" />
                    </a>
                    <div class="card__content">
                        <a href="/product?id=${this.id}" class="">
                            <h2 class="card__title">${this.name}</h2>
                        </a>

                        <p class="card__price">${formatMoney(this.price)}</p>

                        <div>
                            <a href="/admin?id=${this.id}" class="card-button" >
                                <i class="fa-solid fa-pen-to-square"></i>
                            </a>
                            
                            <div id="remove-${this.id}" class="card-button trash-button" >
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div>
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
