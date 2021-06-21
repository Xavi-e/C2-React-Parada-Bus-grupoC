import { useCallback, useEffect, useRef, useState } from "react";

export const Display = () => {
  const [posicion, setPosicion] = useState(0);
  const [contador, setContador] = useState(0);
  const paradasInventadas = [
    {
      status: "success",
      data: {
        ibus: [
          {
            routeId: "2271",
            line: "V27",
            "text-ca": "3 min",
            "t-in-s": 190,
            destination: "Pg. Marítim",
            "t-in-min": 3,
          },
          {
            routeId: "2270",
            line: "V16",
            "text-ca": "10min",
            "t-in-s": 190,
            destination: "Universitat",
            "t-in-min": 10,
          },
          {
            routeId: "2272",
            line: "H12",
            "text-ca": "1min",
            "t-in-s": 190,
            destination: "Pla de Palau",
            "t-in-min": 1,
          },
        ],
      },
    },
  ];
  const {
    data: { ibus },
  } = paradasInventadas[0];
  useEffect(() => {
    const interval = setInterval(() => {
      if (contador <= paradasInventadas.length) {
        setPosicion(posicion - 30);
        setContador(contador + 1);
      } else {
        setPosicion(0);
        setContador(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [contador, paradasInventadas.length, posicion]);
  return (
    <div className="display">
      {ibus.map((parada) => (
        <div key={parada.routeId} className="bus" style={{ top: posicion }}>
          <span className="linea">{parada.line}</span>
          <span className="destino">{parada.destination}</span>
          <span className="tiempo">{parada["text-ca"]}</span>
        </div>
      ))}
    </div>
  );
};
