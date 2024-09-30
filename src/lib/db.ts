import { ProductProps } from '../models/product'
import { v4 as uuidv4 } from 'uuid'

export const products: ProductProps[] = [
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.didaticasp.com.br%2Fproduto%2Facetona-pa-1l-cas-67-64-1-pfssp-concentracao-995-densidade-079.html&psig=AOvVaw2HHOqrq6avkT9nhROlchBu&ust=1727796504713000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiO49j96ogDFQAAAAAdAAAAABAI',
        name: 'Acetona',
        price: 38.46,
        description:
            'Solvente orgânico utilizado em diversas aplicações laboratoriais.',
        type: 'solvente',
        id: uuidv4(),
    },
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.phlab.com.br%2Fproduto%2Fhidroxido-de-sodio-pa-acs-frasco-1-kg%2F&psig=AOvVaw2qptiNCprEiMl414BSOZfS&ust=1727796556166000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCb2vH96ogDFQAAAAAdAAAAABAE',
        name: 'Hidróxido de Sódio (NaOH)',
        price: 49.9,
        description:
            'Reagente básico amplamente utilizado em titulações e síntese química.',
        type: 'reagente',
        id: uuidv4(),
    },
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pro-analise.com.br%2Fbalao-volumetrico-250ml_36951-Brand%3Fuser%3Dfox_proanalise&psig=AOvVaw3qPwvunWp9qOvD-ZSAfybg&ust=1727796582185000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOipzf_96ogDFQAAAAAdAAAAABAE',
        name: 'Balão Volumétrico 250 mL',
        price: 54.6,
        description:
            'Vidraria usada para medições precisas de volumes de líquidos.',
        type: 'vidraria',
        id: uuidv4(),
    },
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.laderquimica.com.br%2Ffenolftaleina-solucao-alcoolica-a-1-1lt-neon&psig=AOvVaw2w-tLiS2NJO8mzmqmuObgf&ust=1727796605719000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDu7Ij-6ogDFQAAAAAdAAAAABAE',
        name: 'Fenolftaleína, solução 1% alcoolica',
        price: 40,
        description:
            'Indicador ácido-base usado em titulações, mudando de cor conforme o pH.',
        type: 'indicador',
        id: uuidv4(),
    },
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubuy.com.br%2Fpt%2Fproduct%2F1BIKN0RJ0-luminol-5g-blood-trace-detection-forensics-chemiluminescence&psig=AOvVaw18Y59r6_A7aykPD85IWK3L&ust=1727736686987000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDg2PWe6YgDFQAAAAAdAAAAABAE',
        name: 'Luminol',
        price: 464,
        description:
            'Indicador quimioluminescente usado na detecção de sangue em locais de crime.',
        type: 'indicador',
        id: uuidv4(),
    },
]
