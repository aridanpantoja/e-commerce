import { ProductProps } from '../models/product'
import { v4 as uuidv4 } from 'uuid'

export const products: ProductProps[] = [
    {
        image: 'https://acdn.mitiendanube.com/stores/001/542/710/products/acetona1-d26e0b7da4c3ba7c6416329634967274-1024-1024.webp',
        name: 'Acetona',
        price: 38.46,
        description:
            'Solvente orgânico utilizado em diversas aplicações laboratoriais.',
        type: 'solvente',
        id: uuidv4(),
    },
    {
        image: 'https://www.phlab.com.br/wp-content/uploads/2017/11/soda-perolas.jpg',
        name: 'Hidróxido de Sódio, pérolas',
        price: 49.9,
        description:
            'Reagente básico amplamente utilizado em titulações e síntese química.',
        type: 'reagente',
        id: uuidv4(),
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqVyJwo2SDGmGflC1USKKeAtebfyFOrtvxw&s',
        name: 'Balão Volumétrico 250 mL',
        price: 54.6,
        description:
            'Vidraria usada para medições precisas de volumes de líquidos.',
        type: 'vidraria',
        id: uuidv4(),
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJRy4T7_587erMhvFVJlWKJymgoaO0Q05bg&s',
        name: 'Fenolftaleína, solução 1% alcoolica',
        price: 40,
        description:
            'Indicador ácido-base usado em titulações, mudando de cor conforme o pH.',
        type: 'indicador',
        id: uuidv4(),
    },
    {
        image: 'https://i.ebayimg.com/images/g/yPYAAOSwy5VbcdUq/s-l1600.jpg',
        name: 'Luminol 5g',
        price: 464,
        description:
            'Indicador quimioluminescente usado na detecção de sangue em locais de crime.',
        type: 'indicador',
        id: uuidv4(),
    },
    {
        image: 'https://images.tcdn.com.br/img/img_prod/1111270/evaporador_rotativo_ika_rv_3_v_355_1_1f8c427b2af5c78018c574f886ae6b38.jpg',
        name: 'Rotaevaporador',
        price: 26655,
        description:
            'Equipamento usado para evaporar solventes de misturas complexas.',
        type: 'equipamento',
        id: uuidv4(),
    }
]

localStorage.setItem('products', JSON.stringify(products));

const storedProducts: string | null = localStorage.getItem('products');

if (storedProducts) {
    const productsFromStorage: ProductProps[] = JSON.parse(storedProducts);
    console.log(productsFromStorage); 
} else {
    console.log('Nenhum produto encontrado no localStorage.');
}