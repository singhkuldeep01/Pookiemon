import React from 'react';

function SearchResults({ searchData ,onClickSearch}) {
  return (
    <div className='w-[100%] max-h-80 bg-white flex overflow-y-scroll flex-col item-center mt-6 gap-1 rounded-md scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 absolute top-full left-0 z-50'>
      {searchData && searchData.length > 0 ? (
        searchData.map((item) => {
          return <div className='hover:bg-blue-400 p-2 rounded-sm' onClick={(e)=>{onClickSearch(e.target)}} key={item.name}>{item.name}</div>;
        })
      ) : (null
      )}
    </div>
  );
}

export default SearchResults;