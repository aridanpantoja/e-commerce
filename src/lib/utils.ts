import { ProductProps } from '../models/product'
import { products } from './db'

export function loadComponent(component: string, id?: string) {
    const wrapper = document.querySelector<HTMLDivElement>(id ? id : '#app')

    if (wrapper) {
        wrapper.insertAdjacentHTML('beforeend', component)
    }
}

export function getStoredProducts() {
    let storedProducts = localStorage.getItem('products')

    if (!storedProducts) {
        setStorage(products)
        return products
    } else {
        return JSON.parse(storedProducts) as ProductProps[]
    }
}

export function setStorage(products: ProductProps[]) {
    localStorage.setItem('products', JSON.stringify(products))
    window.dispatchEvent(new Event('changeProducts'))
}
