import classNames from "classnames";
import { MutableRefObject, RefObject, useRef, useState } from "react";
import { useEffect } from "react";
import "./style.css";
import useClickOutside from "../../../../hooks/useClickOutside";

const selectClick = useClickOutside;

type SelectProps = {
  options: string[];
  onSelect: (filter: "status" | "gender", selection: string) => void;
  currentSelection?: string;
};

const Select = ({ options, onSelect, currentSelection }: SelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectHandler = (option: string) => {
    onSelect("status", option);
    setIsOpen(false);
  };

  useClickOutside({ ref: selectRef, callback: () => setIsOpen(false) });

  return (
    <div ref={selectRef} className="selectContainer">
      <div className="control" onClick={() => setIsOpen(!isOpen)}>
        <strong>Status</strong>
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

export default Select;
