import { useEffect } from "react";
import Navbar from "./components/navbar";
import { get } from "./utils/httpClient";

function App() {
  useEffect(() => {
    (async () => {
      const characters = await get("/character/2");
      console.log(characters);
    })();
  }, []);

  return (
    <div>
      <header>
        <h1> Rick and Morty Episodes </h1>
      </header>
      <main>
        {" "}
        <Navbar title="hola" />
      </main>
    </div>
  );
}

export default App;
