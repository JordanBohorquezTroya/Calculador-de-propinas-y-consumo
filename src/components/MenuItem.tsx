import { menuItemsi } from "../types"


interface menuItemsiProps{
    item: menuItemsi
    AddItems:  (item: menuItemsi) => void
}
export const MenuItem = ({item, AddItems}:menuItemsiProps) => {
  return (
    <button
        className=" border-2 border-teal-500 hover:bg-teal-200 p-3 w-full flex justify-between"
        onClick={() => AddItems (item)}
    >
        <p>{item.name}</p>
        <p className=" font-black">${item.price}</p>
      
    </button>
  )
}
