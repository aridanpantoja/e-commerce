import { Card } from '../../components/card'
import { ProductProps } from '../../types/'
import { formatMoney, loadComponent } from '../../lib/utils'
import './styles.css'

export default class Product {
    constructor(public product: ProductProps) {
        this.product = product

        loadComponent(this.render())
    }

    render(): string {
        return `
            <div class="product">
                <div class="product__image">
                    <img src=${this.product.image} alt="${this.product.name}" />
                </div>

                <div class="product__content">
                    <span class="content__type">${this.product.type.toLocaleUpperCase()}</span>
                    <h1>${this.product.name}</h1>
                    <p>${this.product.description}</p>
                    <p class="content__price">${formatMoney(this.product.price)}</p>

                    <a href="/admin?id=${this.product.id}" class="edit-button">
                        Editar produto &rarr;
                    </a>
                </div>
                
                
            </div>
        `
    }

    createProduct(item: ProductProps): void {
        new Card(item)
    }
}
