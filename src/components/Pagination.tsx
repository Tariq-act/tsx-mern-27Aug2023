interface PaginationProps {
  previousPage: () => void;
  nextPage: () => void;
  currentPage: number;
  totalPages: number;
}

const Pagination = ({
  previousPage,
  nextPage,
  currentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <div className='flex items-center justify-center space-x-2 mt-4'>
      <button
        onClick={previousPage}
        disabled={currentPage === 1}
        className='bg-gray-300 text-gray-600 px-4 py-2 rounded-md'
      >
        Previous
      </button>
      <span className='text-gray-600'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className='bg-gray-300 text-gray-600 px-4 py-2 rounded-md'
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
