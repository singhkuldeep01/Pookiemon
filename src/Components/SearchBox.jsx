import React from 'react'
import './SearchBox.css'
function SearchBox({onSearch , searchInput , onSearchClick , dropDownClick}) {
  return (
    <>
        <div className='bg-white w-max flex justify-center rounded-full items-center '>
        <label htmlFor="search-input" className="material-symbols-outlined search">search</label>
        <input
          id="search-input"
          className='bg-transparent outline-none w-96 px-4 py-2 text-lg'
          placeholder='Search pokemon'
          value={searchInput}
          onChange={(e) => { onSearch(e.target.value) }}
        />
            <span className="material-symbols-outlined search" onClick={dropDownClick}>arrow_drop_down</span>
            <button className='text-white bg-blue-500 px-5 py-2 text-lg ml-2 hover:bg-blue-600 duration-75 rounded-full' onClick={onSearchClick}>Search</button>
        </div>
    </>
  )
}

export default SearchBox