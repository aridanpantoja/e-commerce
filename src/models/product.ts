import { ProductTypeProps } from "./product-type"

export interface ProductProps {
    image: string
    name: string
    price: number
    description: string
    type: ProductTypeProps
}