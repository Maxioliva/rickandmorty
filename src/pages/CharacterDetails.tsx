import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import { Character } from "../utils/Type";
import "./CharacterDetails.css";

//type CharacterCardProps = {
//character: Character;
//};

export function CharacterDetails() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    get("/character/" + characterId).then((data) => {
      console.log(character);
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
          <strong>Title:</strong> {character.name}
        </p>
        <p>
          <strong>Status:</strong> {character.status}
          {/*{character.status.map((status) => status.name).join(", ")} */}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
      </div>
    </div>
  );
}
