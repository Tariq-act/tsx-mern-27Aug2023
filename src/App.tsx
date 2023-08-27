import { useState } from 'react';

import Loader from './components/Loading';
import Navbar from './components/Navbar';
import usePeopleList from './hooks/usePeopleList';
import CardList from './components/CardList';
import Pagination from './components/Pagination';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const url = 'https://swapi.dev/api/people';
  const {
    data,
    isLoading,
    nextPage,
    prevPage,
    totalPages,
    currentPage,
    searchPeople,
  } = usePeopleList(url);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    searchPeople(query);
  };

  return (
    <>
      <Navbar />
      <div className='w-full flex items-center mt-2'>
        <input
          type='text'
          placeholder='Search for a person...'
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className='border mx-auto px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-300'
        />
      </div>

      {isLoading ? (
        <div className='absolute top-2/4 left-2/4'>
          <Loader />
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center m-10'>
          <CardList people={data} />

          {data.length === 0 ? null : (
            <Pagination
              previousPage={prevPage}
              nextPage={nextPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
        </div>
      )}
    </>
  );
}

export default App;
