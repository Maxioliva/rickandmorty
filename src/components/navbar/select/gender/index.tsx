import classNames from "classnames";
import { useState, useRef } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";

const selectClick = useClickOutside;

type SelectProps = {
  options: string[];
  onSelect: (filter: "status" | "gender", selection: string) => void;
  currentSelection?: string;
};

const Gender = ({ options, onSelect, currentSelection }: SelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectHandler = (option: string) => {
    onSelect("gender", option);
    setIsOpen(false);
  };

  useClickOutside({ ref: selectRef, callback: () => setIsOpen(false) });

  return (
    <div ref={selectRef} className="selectContainer">
      <div className="control" onClick={() => setIsOpen(!isOpen)}>
        <strong>Gender</strong>
      </div>

      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <div
              onClick={() => selectHandler(option)}
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
