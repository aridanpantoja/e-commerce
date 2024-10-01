import { Card } from '../../components/card'
import { getStoredProducts, loadComponent } from '../../lib/utils'

export default class Home {
    constructor() {
        loadComponent(this.render())

        this.renderProducts()
    }

    render(): string {
        return `
            <section class="hero-section">
                <h1>Lojinha</h2>
                <p>Confira as nossas novidades</p>
            </section>

            <section>
                <h2>Todos os produtos</h2>
                <div id="products-list"></div>
            </section>
        `
    }

    renderProducts() {
        this.clearProductList()
        const products = getStoredProducts()
        products.forEach((item) => new Card(item))
    }

    clearProductList() {
        const list = document.querySelector<HTMLDivElement>('#products-list')
        if (list) list.innerHTML = ''
    }
}
