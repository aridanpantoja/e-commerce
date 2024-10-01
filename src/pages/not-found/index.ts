import { loadComponent } from '../../lib/utils'

export default class NotFound {
    constructor() {
        loadComponent(this.render())
    }

    render() {
        return `
            <h1 class"title">Página Não Encontrada</h1>
        `
    }
}
