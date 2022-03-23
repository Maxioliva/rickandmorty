import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCharacter } from "../Utils/httpClient";
import { Character } from "../Utils/Type";
import "./CharacterDetails.css";

export function CharacterDetails() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    getCharacter("/character/" + characterId).then((data) => {
      setCharacter(data);
    });
  }, [characterId]);

  if (!character) {
    return null;
  }

  const imageUrl = character.image;

  return (
    <div className="detailsContainer">
      <img className="col movieImage" src={imageUrl} alt={character.name} />
      <div className="col movieDetails">
        <p className="firstItem">
          <strong>Name:</strong> {character.name}
        </p>
        <p>
          <strong>Status:</strong> {character.status}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
      </div>
    </div>
  );
}
