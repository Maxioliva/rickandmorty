import { useEffect } from "react";
import Navbar from "./components/navbar";
import { get } from "./utils/httpClient";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { CharacterGrid } from "./components/header/CharacterGrid";
import { LandingPage } from "./pages/LandingPage";

function App() {
  //useEffect(() => {
  //(async () => {
  //const characters = await get("/character/2");
  //console.log(characters);
  //})();
  //}, []);

  return (
    <Router>
      <header>
        <Navbar title="hola" />
        <Link to="/">
          <h1> Rick and Morty Episodes </h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>{" "}
      </main>
    </Router>
  );
}

export default App;
