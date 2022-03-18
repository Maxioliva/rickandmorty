import { useEffect } from "react";
import Navbar from "./components/navbar";
import { get } from "./utils/httpClient";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { CharacterGrid } from "./components/header/CharacterGrid";
import { LandingPage } from "./pages/LandingPage";
import "./App.css";
import { CharacterDetails } from "./pages/CharacterDetails";
import Pagination from "./components/header/Pagination";

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
        <Navbar title="navar en construccion" />
        <Link to="/">
          <h1 className="title"> Rick and Morty Characters </h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/character/:characterId"
            element={<CharacterDetails />}
          />
        </Routes>{" "}
      </main>
    </Router>
  );
}

export default App;
