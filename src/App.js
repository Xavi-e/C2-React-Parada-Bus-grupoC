// APItmb= https://api.tmb.cat/v1/ibus/stops/{parada}?app_id={identificador}&app_key={clavesKey}
// identidicador= {68b27c54};
// clavesKey = {ae7f8c10e50256baea7772a20d5124d3};

// parada = {nParada};
import { NumParada } from "./components/NumParada";
import { Display } from "./components/Display";
import { TiempoLinea } from "./components/TiempoLinea";
import { FormTiempoDeLinea } from "./components/FormTiempoDeLinea";
import { FormNumeroParada } from "./components/FormNumeroParada";

function App() {
  return (
    <div className="contenedor">
      <header className="cabecera">
        <NumParada />
        <Display />
        <TiempoLinea />
      </header>
      <section className="forms">
        <form>
          <label htmlFor="num-parada">Parada nº: </label>
          <input type="number" id="num-parada" />
          <button type="submit">Buscar</button>
        </form>
        <FormNumeroParada />
        <FormTiempoDeLinea />
      </section>
      {/* <header className="cabecera">
        <h2>Bus 109 - Hospital Clínic / Polígon Zona Franca</h2>
        <h3>Polígon Zona Franca Hospital Clínic</h3>
        <a href="volver a la portada">Volver a la portada</a>
      </header>
      <section>
        <ul className="grafico-paradas">
          <li className="parada">
            Parada nº X: Nombre parada (<a href="ver mapa">ver mapa</a>)
          </li>
          <li className="parada">
            Parada nº 1741: Cotxeres TB Zona Franca (
            <a href="ver mapa">ver mapa</a>)
          </li>
          <li className="parada">
            Parada nº 1045: Pg Zona Franca - Motors (
            <a href="ver mapa">ver mapa</a>)
          </li>
          <li className="parada">
            Parada nº 1615: Carrer número 4 - Carrer D (
            <a href="ver mapa">ver mapa</a>)
          </li>
          <li className="parada">
            Parada nº 1639: Carrer A- Comissaria Portuària (
            <a href="ver mapa">ver mapa</a>)
          </li>
          <li className="parada">
            Parada nº 1643: Mercabarna - Mercat del Peix (
            <a href="ver mapa">ver mapa</a>)
          </li>
        </ul>
      </section> */}
    </div>
  );
}

export default App;
