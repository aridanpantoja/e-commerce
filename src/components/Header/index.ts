import { loadComponent } from '../../lib/utils'
import './Header.css'

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
                    <li><a href="/contact">Contato</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#"><img src="https://img.icons8.com/?size=100&id=84996&format=png&color=000000" alt="Icone carrinho de compras"></a></li>
                </ul>

            </nav>
        `
    }
}
