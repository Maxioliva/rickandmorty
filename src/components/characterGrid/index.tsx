import { useEffect, useState } from "react";
import { getCharacters, BASE_URL } from "../../Utils/httpClient";
import CharacterCard from "../characterCard";
import { Character } from "../../Utils/Type";
import "./style.css";
import Pagination from "../pagination/Pagination";
import { Info, Search } from "../../Utils/Type";

type CharacterGridProps = {
  search?: Search;
};

export function CharacterGrid({ search }: CharacterGridProps) {
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
    console.log("searchchange", search);
    if (!search) {
      return;
    }
    let path = BASE_URL + "/character";
    if (search.text) {
      path = path + `/?name=${search.text}`;
    }
    if (search.status) {
      path = path + `${search.text ? "&" : "?"}status=${search.status}`;
    }

    getCharacters(path).then((data) => {
      setCharacters(data.results);
      setInfo(data.info);
    });
  }, [search]);

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
