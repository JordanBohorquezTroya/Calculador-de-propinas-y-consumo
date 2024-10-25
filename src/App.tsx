import { menuItems } from "./data/db";
import { MenuItem, OrderContent, OrderTotal } from "./components";
import { useOrder } from "./hooks/useOrder";
import { Propina } from "./components/Propina";

function App() {
  const {
    order,
    porcentaje,
    setPorcentaje,
    AddItems,
    RemoveItems,
    GuardarOrder,
  } = useOrder();

  return (
    <>
      <header className=" bg-teal-500  py-5">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de propinas y consumos
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto py-10 grid md:grid-cols-2 grid-cols-1">
        <div className="p-4">
          <h2 className=" font-black text-4xl">Menu</h2>
          <div className="space-y-2 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} AddItems={AddItems} />
            ))}
          </div>
        </div>
        {order.length > 0 ? (
          <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            <OrderContent order={order} RemoveItems={RemoveItems} />

            <Propina setPorcentaje={setPorcentaje} />

            <OrderTotal
              order={order}
              porcentaje={porcentaje}
              GuardarOrder={GuardarOrder}
            />
          </div>
        ) : (
          <p className="text-center"> El carrito esta vacio</p>
        )}
      </main>
    </>
  );
}

export default App;
