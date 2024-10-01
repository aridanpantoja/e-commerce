import { loadComponent } from '../../lib/utils'
import './styles.css'

export class Footer {
    constructor() {
        loadComponent(this.render(), '#footer')
    }

    private render() {
        return `
            <div class="footer">
                <p class="footer__content">© 2024 | All rights reserved</p> 
            </div>
        `
    }
}
