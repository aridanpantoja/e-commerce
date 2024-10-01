import { Card } from '../../components/card'
import { getStoredProducts, loadComponent } from '../../lib/utils'
import './styles.css'

export default class Home {
    constructor() {
        loadComponent(this.render())

        this.renderProducts()
    }

    render(): string {
        return `
            <section class="hero-section">
                <h1>Bem-vindo a nossa Lojinha de Produtos Químicos</h2>
                <p>Aqui você vai encontrar tudo para explodir alguma coisa e até para produzir entorpecentes, confira as novidades!!</p>
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
