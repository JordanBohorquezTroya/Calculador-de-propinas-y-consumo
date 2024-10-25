import { useMemo } from "react";
import { OrderItems } from "../types";
import { FormatDolar } from "../helpers/FormatDolar";

interface OrderTotal {
  order: OrderItems[];
  porcentaje: number;
  GuardarOrder: () => void
}

export const OrderTotal = ({ order, porcentaje, GuardarOrder }: OrderTotal) => {
  
  const SubtotalPagar = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );

  const PorcentajeSuma = useMemo(
    () => SubtotalPagar * porcentaje,
    [porcentaje, order]
  );

  const TotalApagar = useMemo(
    () => +SubtotalPagar + PorcentajeSuma,
    [porcentaje, order]
  );

  return (
    <div className=" space-y-3">
      <h2 className=" font-black text-2xl">Total Y Propinas</h2>
      <p>
        Subtotal a pagar:
        <span className=" font-bold">{FormatDolar(SubtotalPagar)}</span>
      </p>

      <p>
        Propina:
        <span className=" font-bold"> {FormatDolar(PorcentajeSuma)}</span>
      </p>

      <p>
        Total a pagar:
        <span className=" font-bold"> {FormatDolar(TotalApagar)}</span>
      </p>

      <button className=" w-full bg-black text-white p-2"
      onClick={GuardarOrder}
      >
        Guardar Orden
      </button>
    </div>
  );
};
