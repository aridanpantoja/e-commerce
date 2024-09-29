import { Footer } from './components/Footer/'
import { Header } from './components/Header/'

const path = window.location.pathname

const header = new Header()
const footer = new Footer()

if (path === '/') {
    import('./pages/home.ts')
        .then((module) => new module.default())
        .catch((err) => console.error('Erro ao carregar página: ', err))
} else if (path === '/admin') {
    import('./pages/admin.ts')
        .then((module) => new module.default())
        .catch((err) => console.error('Erro ao carregar página: ', err))
} else {
    import('./pages/not-found.ts')
        .then((module) => new module.default())
        .catch((err) => console.error('Erro ao carregar página: ', err))
}
