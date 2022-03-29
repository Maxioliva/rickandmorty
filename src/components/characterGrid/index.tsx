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
    try {
      getCharacters(info[election]).then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    const path = new URLSearchParams();
    if (search.text) {
      path.set("name", search.text);
    }
    if (search.status) {
      path.set("status", search.status);
    }
    if (search.gender) {
      path.set("gender", search.gender);
    }

    try {
      getCharacters(BASE_URL + "/character?" + path.toString()).then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      });
    } catch (error) {
      console.log(error);
    }
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
