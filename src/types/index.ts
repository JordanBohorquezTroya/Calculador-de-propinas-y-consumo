export interface menuItemsi {
    id: number
    name: string
    price: number
}

export interface OrderItems extends menuItemsi{
    quantity: number
}

