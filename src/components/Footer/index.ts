import { loadComponent } from '../../lib/utils'
import './Footer.css'

export class Footer {
    constructor() {
        loadComponent(this.render(), '#footer')
    }

    render() {
        return `
            <div class="footer">
                <p>Feito por Aridan, Debora e Eric</p> 
            </div>
        `
    }
}
