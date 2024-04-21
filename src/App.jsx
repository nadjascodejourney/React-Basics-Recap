// Importieren der Komponente(n)
import FunctionalComponent from "./components/FunctionalComponent";
import Products from "./components/Products";
import Props1 from "./components/Props1";
import Props2 from "./components/Props2";
import Emailinput from "./components/Emailinput";
import FilteredSearch from "./components/FilteredSearch";

function App() {
  // Funktionalität

  return (
    <div>
      <h1>React Recap</h1>
      {/* JSX Code */}
      <FunctionalComponent /> {/* Unterkomponente */}
      {/* <FunctionalComponent></FunctionalComponent>
      {/* Auch diese Schreibweise ist möglich */}
      <br />
      <br />
      <Products />
      <br />
      <br />
      <Props1 />
      <br />
      <br />
      <Props2 />
      <br />
      <br />
      <Emailinput />
      <br />
      <br />
      <FilteredSearch />
    </div>
  );
}

// Export der Komponente
export default App;