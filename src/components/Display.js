import { useEffect, useState } from "react";

export const Display = (props) => {
  const { paradas } = props;
  const [posicion, setPosicion] = useState(0);
  const [contador, setContador] = useState(0);
  useEffect(() => {
    if (paradas.length > 1) {
      const interval = setInterval(() => {
        if (contador !== paradas.length - 1) {
          setPosicion(posicion - 30);
          setContador(contador + 1);
        } else {
          setPosicion(0);
          setContador(0);
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [contador, paradas.length, posicion]);
  return (
    <div className="display">
      {paradas.length > 0 &&
        paradas.map((parada) => (
          <div key={parada.routeId} className="bus" style={{ top: posicion }}>
            <span className="linea">{parada.line}</span>
            <span className="destino">{parada.destination}</span>
            <span className="tiempo">{parada["text-ca"]}</span>
          </div>
        ))}
    </div>
  );
};
