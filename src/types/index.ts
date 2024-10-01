export type ProductTypeProps =
    | 'solvente'
    | 'reagente'
    | 'vidraria'
    | 'indicador'
    | 'equipamento'

export type ProductProps = {
    image: string
    name: string
    price: number
    type: ProductTypeProps
    id: string
    description: string
}
