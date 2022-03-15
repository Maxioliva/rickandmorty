import { Link } from "react-router-dom";
import { Character } from "../../utils/Type";

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  const imageUrl = character.image;
  return (
    <li>
      <Link to={"/character/" + character.id}>
        <img width={230} src={imageUrl} alt={character.name} height={345} />
        <div>{character.name}</div>
      </Link>
    </li>
  );
};

export default CharacterCard;
