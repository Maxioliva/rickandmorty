import { useEffect, useState } from "react";
import { get } from "../../utils/httpClient";
import CharacterCard from "./CharacterCard";
import { Character } from "../../utils/Type";
import "./CharacterGrid.css";
import Pagination from "./Pagination";

export function CharacterGrid() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    get("/character").then((data) => {
      console.log(data);
      setCharacters(data.results);
    });
  }, []);

  return (
    <ul className="characterGrid">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </ul>
  );
}
