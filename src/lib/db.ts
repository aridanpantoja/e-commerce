import { ProductProps } from '../models/product'
import { v4 as uuidv4 } from 'uuid'

export const products: ProductProps[] = [
    {
        image: 'https://example.com/images/acetona.jpg',
        name: 'Acetona',
        price: 25.5,
        description:
            'Solvente orgânico utilizado em diversas aplicações laboratoriais.',
        type: 'solvente',
        id: uuidv4(),
    },
    {
        image: 'https://example.com/images/naoh.jpg',
        name: 'Hidróxido de Sódio (NaOH)',
        price: 18.9,
        description:
            'Reagente básico amplamente utilizado em titulações e síntese química.',
        type: 'reagente',
        id: uuidv4(),
    },
    {
        image: 'https://example.com/images/balão-volumetrico.jpg',
        name: 'Balão Volumétrico 250 mL',
        price: 45.0,
        description:
            'Vidraria usada para medições precisas de volumes de líquidos.',
        type: 'vidraria',
        id: uuidv4(),
    },
    {
        image: 'https://example.com/images/fenolftaleina.jpg',
        name: 'Fenolftaleína',
        price: 12.0,
        description:
            'Indicador ácido-base usado em titulações, mudando de cor conforme o pH.',
        type: 'indicador',
        id: uuidv4(),
    },
    {
        image: 'https://example.com/images/etanol.jpg',
        name: 'Etanol 70%',
        price: 30.75,
        description:
            'Solvente comumente utilizado para limpeza e desinfecção em laboratório.',
        type: 'solvente',
        id: uuidv4(),
    },
]
