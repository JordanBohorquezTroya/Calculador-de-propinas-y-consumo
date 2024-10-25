const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

interface PorcentajeHooks {
  setPorcentaje: React.Dispatch<React.SetStateAction<number>>
}

export const Propina = ({setPorcentaje}: PorcentajeHooks) => {
  return (
    <div>
      <h3 className=" font-black text-2xl">Propina</h3>

      <form>
        {tipOptions.map((item) => (
          <div className="flex gap-2" key={item.id}>
            <label htmlFor={item.id}> {item.label}</label>

            <input 
            type="radio" 
            name="item" 
            id={item.id} 
            value={item.value}
            onChange={(e) => setPorcentaje(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
