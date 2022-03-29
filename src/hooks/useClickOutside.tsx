import { useEffect, RefObject } from "react";

type UseClickOutsideProps = {
  ref: RefObject<HTMLDivElement>;
  callback: () => void;
};

const useClickOutside = ({ ref, callback }: UseClickOutsideProps) => {
  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
};

export default useClickOutside;
