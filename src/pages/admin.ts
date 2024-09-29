import { Form } from '../components/Form'
import { Card } from '../components/Card'
import Page from './page'
import { ProductProps } from '../models/product'
import '../styles/admin.css'

export default class Admin extends Page {
    constructor() {
        super()

        new Form()

        window.addEventListener('changeProducts', () => {
            this.renderProducts()
        })
    }

    render(): string {
        return `
            <section class="section">
                <h2 class="section__title">Welcome Back!</h2>
                <p>Here's a list of your tasks for this month!</p>

                <div id="form-wrapper"></div>
            </section>

            <section>
                <div id="products-list"></div>
            </section>
        `
    }

    createProduct(item: ProductProps): void {
        new Card(item, true)
    }
}
