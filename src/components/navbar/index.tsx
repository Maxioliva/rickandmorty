import { type } from "@testing-library/user-event/dist/type";
import "./style.css";
import { Search } from "../../Utils/Type";
import { useState } from "react";
import Status from "./select/status";
import Gender from "./select/gender";

type NavbarProps = {
  onSearch: (newSearch: Search) => void;
};

const Navbar = ({ onSearch }: NavbarProps) => {
  const [localValues, setLocalValues] = useState<Search>();

  const selectHandler = (filter: "status" | "gender", selection: string) => {
    setLocalValues({ ...localValues, [filter]: selection });
  };

  // const selectHandler = (option: string) => {
  //   setLocalValues({ ...localValues, status: option  gender: option });
  // };

  // const selectHandler2 = (option: string) => {
  //   setLocalValues({ ...localValues, gender: option });
  // };

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
      <Status
        currentSelection={localValues?.status}
        onSelect={selectHandler}
        options={["Alive", "Dead", "Unknown"]}
      />
      <Gender
        currentSelection={localValues?.gender}
        onSelect={selectHandler}
        options={["Female", "Male", "Genderless", "Unknown"]}
      />

      <button className="button" onClick={submitHandler}>
        {" "}
        Search{" "}
      </button>
    </div>
  );
};

export default Navbar;
