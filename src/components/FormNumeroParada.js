import { useState } from "react";

export const FormNumeroParada = (props) => {
  const { getParadas } = props;
  const [parada, setParada] = useState("");
  const setDato = (evento) => {
    setParada(evento.target.value);
  };
  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        getParadas(parada);
      }}
    >
      <label htmlFor="num-parada">Parada nº: </label>
      <input type="number" id="num-parada" onChange={setDato} />
      <button type="submit">Buscar</button>
    </form>
  );
};
