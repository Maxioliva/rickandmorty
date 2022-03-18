import { CharacterGrid } from "../components/header/CharacterGrid";
import Pagination from "../components/header/Pagination";

export function LandingPage() {
  return (
    <div>
      <CharacterGrid />;
      <Pagination />
    </div>
  );
}
