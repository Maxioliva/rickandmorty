const Pagination = () => {
  const handlePrevious = () => {};
  const handleNext = () => {};

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button onClick={handlePrevious}> Previous</button>
        </li>
        <li>
          <button onClick={handleNext}>Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
