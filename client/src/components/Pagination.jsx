export const Pagination = ({ totalPagination, nroPaginado, onClickPagination }) => {
    var pagination = [];
  
    for (let i = 1; i <= Math.ceil(totalPagination / nroPaginado); i++) {
      pagination.push(i);
    }
  
    return (
      <div className="flex justify-center mb-3">
        <ul className="flex space-x-2">
          {pagination.map((N) => (
            <li key={N}>
              <button
                className="px-3 py-2 w-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:from-orange-600 focus:to-purple-600"
                onClick={() => onClickPagination(N)}
              >
                {N}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  