import classNames from "classnames";
import { useState } from "react";

// import "./style.css";

type SelectProps = {
  options: string[];
  onSelect: (filter: "status" | "gender", selection: string) => void;
  currentSelection?: string;
};

const Gender = ({ options, onSelect, currentSelection }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="selectContainer">
      <div className="control" onClick={() => setIsOpen(!isOpen)}>
        <strong>Gender</strong>
      </div>

      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <div
              onClick={() => onSelect("gender", option)}
              className={classNames("option", {
                isSelected: option === currentSelection,
              })}
              key={option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gender;
