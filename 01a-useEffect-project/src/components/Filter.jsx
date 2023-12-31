export const Filter = ({ filterData, category, setCategory }) => {
  const filterHandler = (title) => {
    setCategory(title);
  };
  return (
    <div>
      {filterData.map((data) => {
        return (
          <button
            onClick={() => filterHandler(data.title)}
            className={`btn btn-primary mx-1 ${
              category === data.title && "btn-danger"
            }`}
            key={data.id}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};
