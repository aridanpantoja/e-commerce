import { Card } from '../components/Card'
import Page from './page'
import { ProductProps } from '../models/product'
import '../styles/home.css'

export default class Home extends Page {
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

    createProduct(item: ProductProps): void {
        new Card(item)
    }
}
