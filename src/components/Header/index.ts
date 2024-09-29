import { loadComponent } from '../../lib/utils'
import './Header.css'

export class Header {
    constructor() {
        loadComponent(this.render(), '#header')
    }

    render() {
        return `
            <div class="navbar"> 
                <a href="/"><span>Lojinha</span></a>

                <nav>
                    <a href="/admin">Painel</a>
                </nav>

                <span>Carrinho</span>
            </div>
        `
    }
}
