import { type } from "@testing-library/user-event/dist/type";
import "./style.css";
import { Search } from "../../Utils/Type";
import { useState } from "react";
import Select from "../select";

type NavbarProps = {
  onSearch: (newSearch: Search) => void;
};

const Navbar = ({ onSearch }: NavbarProps) => {
  const [localValues, setLocalValues] = useState<Search>();

  const selectHandler = (option: string) => {
    setLocalValues({ ...localValues, status: option });
  };

  const submitHandler = () => {
    if (!localValues) {
      return;
    }
    onSearch(localValues);
  };

  return (
    <div className="navbarContainer">
      <input
        className="searchInput"
        type="text"
        onChange={(e) =>
          setLocalValues({ ...localValues, text: e.target.value })
        }
      />
      <Select
        currentSelection={localValues?.status}
        onSelect={selectHandler}
        options={["Alive", "Dead", "Unknown"]}
      />
      <button className="button" onClick={submitHandler}>
        {" "}
        Search{" "}
      </button>
    </div>
  );
};

export default Navbar;
