import { loadComponent } from '../../lib/utils'
import './styles.css'

export class Footer {
    constructor() {
        loadComponent(this.render(), '#footer')
    }

    private render() {
        return `
            <div class="footer">
                <p>Feito por Aridan, Debora e Eric</p> 
            </div>
        `
    }
}
