import { FormatDolar } from "../helpers/FormatDolar";
import type { menuItemsi ,OrderItems } from "../types";

interface OrderConsumo {
  order: OrderItems[];
  RemoveItems:  (id: menuItemsi['id']) => void
}

export const OrderContent = ({ order, RemoveItems }: OrderConsumo) => {
  return (
    <>
      <h2 className=" font-black text-4xl">Consumo</h2>
      <div className=" space-y-3 mt-5">
        {order.map((item) => (
            <div className=" flex justify-between items-center border-t border-gray-500 p-5 last-of-type:border-b" 
            key={item.id}>
              <div>
                <p>
                  {item.name} - {FormatDolar(item.price)}
                </p>
                <p className=" font-black">
                  Cantidad:
                  {item.quantity} - {FormatDolar(item.price * item.quantity)}
                </p>
              </div>

              <button className=" bg-red-700 w-7 h-7 rounded-full text-white font-black" 
              onClick={() => RemoveItems( item.id)}>
                X
              </button>
            </div>
          ))}
        
      </div>
    </>
  );
};
