import { useEffect, useState } from "react";
import { getCharacters } from "../../utils/httpClient";
import CharacterCard from "./CharacterCard";
import { Character } from "../../utils/Type";
import "./CharacterGrid.css";
import Pagination from "./Pagination";
import { Info } from "../../utils/Type";

export function CharacterGrid() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info>();

  const paginationHandler = (election: "next" | "prev") => {
    if (!info) {
      return;
    }
    getCharacters(info[election]).then((data) => {
      setCharacters(data.results);
      setInfo(data.info);
    });
  };

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data.results);
      setInfo(data.info);
    });
  }, []);

  return (
    <div>
      <ul className="characterGrid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
      {info && (
        <Pagination
          prev={info.prev}
          next={info.next}
          onPaginationChange={paginationHandler}
        />
      )}
    </div>
  );
}
