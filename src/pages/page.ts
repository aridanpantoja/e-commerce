import { getStoredProducts, loadComponent } from '../lib/utils'
import { ProductProps } from '../models/product'

export default abstract class Page {
    constructor() {
        loadComponent(this.render())
        this.renderProducts()
    }

    abstract render(): string

    abstract createProduct(item: ProductProps): void

    renderProducts() {
        this.clearProductList()
        const products = getStoredProducts()
        products.forEach((item) => this.createProduct(item))
    }

    clearProductList() {
        const list = document.querySelector<HTMLDivElement>('#products-list')
        if (list) list.innerHTML = ''
    }
}
