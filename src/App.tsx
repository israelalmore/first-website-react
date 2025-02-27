import "./App.css";
import "./assets/components/index.ts";
import "./assets/components/molecules/card.molecules.tsx";
import Card from "./assets/components/molecules/card.molecules.tsx";
import NavBar from "./assets/components/molecules/navbar.molecules.tsx";

function App() {
  return (
    <>
      <NavBar />
      <header className="Encabezado">
        {" "}
        <h1> Nombre de la Marca </h1>
      </header>
      <div>
        {" "}
        Este es el producto (lo de)
        <Card titulo={"Prueba"} subtitulo={"Prueba"} />
      </div>
    </>
  );
}

export default App;
