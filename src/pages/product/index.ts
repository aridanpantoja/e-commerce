import { Card } from '../../components/card'
import { ProductProps } from '../../types/'
import { loadComponent } from '../../lib/utils'

export default class Product {
    constructor(public product: ProductProps) {
        this.product = product

        loadComponent(this.render())
    }

    render(): string {
        return `
            <div>
                <img src=${this.product.image} />
                <p>${this.product.name}</p>
            </div>
        `
    }

    createProduct(item: ProductProps): void {
        new Card(item)
    }
}
