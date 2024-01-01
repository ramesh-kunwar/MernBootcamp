import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  console.log(page);
  return (
    <div className="d-flex justify-content-between">
      <div>
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="btn btn-primary"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="btn btn-secondary"
          >
            Next
          </button>
        )}
      </div>
      <p>
        Page {page} of {totalPages}
      </p>
    </div>
  );
};
export default Pagination;
