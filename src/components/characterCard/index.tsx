import { Link } from "react-router-dom";
import { Character } from "../../Utils/Type";
import "./style.css";

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  const imageUrl = character.image;
  return (
    <li className="characterCard">
      <Link to={"/character/" + character.id}>
        <img
          width={230}
          className="characterImage"
          src={imageUrl}
          alt={character.name}
          height={345}
        />
        <div>{character.name}</div>
      </Link>
    </li>
  );
};

export default CharacterCard;
