import { loadComponent } from '../../lib/utils'
import './styles.css'

export class Header {
    constructor() {
        loadComponent(this.render(), '#header')
    }

    render() {
        return /*HTML*/ `
            <nav class="navbar">
                <a href="/"><span>Início</span></a>

                <ul class="navbar__items">
                    <li><a href="/admin">Painel</a></li>
                </ul>

            </nav>
        `
    }
}
