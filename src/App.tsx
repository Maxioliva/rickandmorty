import { useState } from "react";
import Navbar from "./components/navbar";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { CharacterGrid } from "./components/characterGrid/index";
import { Search } from "./Utils/Type";
import "./App.css";
import { CharacterDetails } from "./pages/CharacterDetails";
// import { Search } from "./components/search";

function App() {
  const [search, setSearch] = useState<Search>();
  const onCharacterSearch = (newSearch: Search) => {
    setSearch(newSearch);
  };

  return (
    <Router>
      <header>
        {/* <Search /> */}
        <Navbar onSearch={onCharacterSearch} />
        <Link to="/">
          <h1 className="title"> Rick and Morty Characters </h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<CharacterGrid search={search} />} />

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
