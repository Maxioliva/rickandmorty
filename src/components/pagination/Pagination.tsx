import { Info } from "../../Utils/Type";
import "./style.css";

type Election = "next" | "prev";

type PaginationProps = {
  //onPaginationChange: (case: "next" | "prev") => void;
  prev?: string;
  next?: string;
  onPaginationChange: (election: Election) => void;
};

const paginationCase: Election[] = ["prev", "next"];

const Pagination = (props: PaginationProps) => {
  return (
    <nav>
      <ul className="pagination">
        {paginationCase.map((election) => {
          if (!props[election]) {
            return;
          }
          return (
            <li className="page-item" key={election}>
              <button
                className="next"
                onClick={() => props.onPaginationChange(election)}
              >
                {election}
              </button>
            </li>
          );
        })}
        {/* {prev && (
        //   <li className="page-item">
        //     <button onClick={() => onPaginationChange("prev")}>Previous</button>
        //   </li>
        // )}
        // {next && (
        //   <li>
        //     <button onClick={() => onPaginationChange("next")}>Next</button>
        //   </li>
        )} */}
      </ul>
    </nav>
  );
};

export default Pagination;
