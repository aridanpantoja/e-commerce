import { Footer } from './components/footer/'
import { Header } from './components/header/'
import { getProductBySearchParam, getStoredProducts } from './lib/utils.ts'
import { ProductProps } from './types/'

class App {
    private path: string

    constructor() {
        new Header()
        new Footer()
        this.path = window.location.pathname
        this.init()
    }

    init() {
        switch (this.path) {
            case '/':
                this.loadPage('./pages/home/')
                break
            case '/admin':
                this.loadPage('./pages/admin/')
                break
            case '/product':
                this.loadProductPage()
                break
            default:
                this.notFound()
                break
        }
    }

    private async loadPage(pagePath: string, product?: ProductProps) {
        try {
            const module = await import(/* @vite-ignore */ pagePath)
            new module.default(product)
        } catch (error) {
            console.error('Erro ao carregar a página: ', error)
        }
    }

    private loadProductPage() {
        const product = getProductBySearchParam()

        if (!product) {
            this.notFound()
        } else {
            this.loadPage('./pages/product/', product)
        }
    }

    private notFound() {
        this.loadPage('./pages/not-found/')
    }
}

new App()
