import { useState } from "react"
import type {menuItemsi, OrderItems} from "../types/index"

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItems[]>([])
    const [porcentaje, setPorcentaje] = useState(0)
   

    //AGREGA LA ORDEN 
    const AddItems = ( item : menuItemsi) => {
        const itemExisst =  order.find((orderItem => orderItem.id === item.id))
        
        if(itemExisst){
            const UpdateItem =  order.map((orderItem => orderItem.id === item.id
                ? {...orderItem, quantity : orderItem.quantity + 1}
                : orderItem
            )) 
            setOrder(UpdateItem)
    
        }else{
            const newItem :OrderItems = {...item, quantity : 1}
            setOrder( [...order, newItem  ])
        }

    }


    //ELIMINA EL ORDEN
    const RemoveItems = (id : menuItemsi['id']) =>{
        setOrder(order.filter(item => item.id !== id) )
    }


    const GuardarOrder = () =>{
       setOrder([])
       setPorcentaje(0)
    }


  return {
    order,
    porcentaje, 
    setPorcentaje,
    AddItems,
    RemoveItems,
    GuardarOrder
    

  }
   

}
