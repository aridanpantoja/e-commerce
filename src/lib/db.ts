import { ProductProps } from '../models/product'
import { v4 as uuidv4 } from 'uuid'

export const products: ProductProps[] = [
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.didaticasp.com.br%2Facetona-pa-1l-pfssp&psig=AOvVaw3EkVcz-SG9gZrcb8ykEbGZ&ust=1727736344118000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPi1ic-d6YgDFQAAAAAdAAAAABAE',
        name: 'Acetona',
        price: 38.46,
        description:
            'Solvente orgânico utilizado em diversas aplicações laboratoriais.',
        type: 'solvente',
        id: uuidv4(),
    },
    {
        image: 'https://http2.mlstatic.com/D_NQ_NP_785747-MLB76861023187_062024-O.webp',
        name: 'Hidróxido de Sódio (NaOH)',
        price: 49.9,
        description:
            'Reagente básico amplamente utilizado em titulações e síntese química.',
        type: 'reagente',
        id: uuidv4(),
    },
    {
        image: 'https://www.google.com/imgres?q=balao%20volumetrico%20240%20ml&imgurl=https%3A%2F%2Fimages.tcdn.com.br%2Fimg%2Fimg_prod%2F243435%2Fbalao_volumetrico_com_rolha_de_vidro_3311_1_20190103180117.jpg&imgrefurl=https%3A%2F%2Fwww.lojasynth.com%2Fvidrarias%2Fbaloes-volumetricos%2Fbalao-volumetrico-com-rolha-em-polipropileno&docid=U1kojy617267DM&tbnid=nLDbpm9pjr6nwM&vet=12ahUKEwi03vSUnumIAxVKpZUCHZcHFx0QM3oECGQQAA..i&w=700&h=700&hcb=2&ved=2ahUKEwi03vSUnumIAxVKpZUCHZcHFx0QM3oECGQQAA',
        name: 'Balão Volumétrico 250 mL',
        price: 54.6,
        description:
            'Vidraria usada para medições precisas de volumes de líquidos.',
        type: 'vidraria',
        id: uuidv4(),
    },
    {
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_707220-MLB54380724043_032023-F.webp',
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
            'Indicador quimio',
        type: 'indicador',
        id: uuidv4(),
    },
]
