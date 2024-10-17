import React, { useEffect } from 'react'
import SearchBox from './SearchBox'
import { useState } from 'react'
import SearchResults from './SearchResults';
import ShowPokemonData from './ShowPokemonData';
function InputWithSearchResult() {
  const [searchResult, setSearchResult] = useState([]);
  const [filterResult , setFilterResult] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [pokemonData, setPokemonData] = useState({});
  const [isDropDown, setIsDropDown] = useState(false); 
  const [noPokemon , setNoPokemon] = useState(false);
  async function fetchData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10277')
    const data = await response.json()
    setSearchResult(data.results);
  }
  useEffect(() => {
  fetchData() ;
  },[]);

  function filterData(inputData){
    if(inputData !== '') {
        const filteredData = searchResult.filter((item) => {
        return item.name.includes(inputData);
      })
      setFilterResult(filteredData);
    }else{
      setFilterResult([]);
    }
  }
  function onSearchHandler(inputData){
    setSearchInput(inputData);
    filterData(inputData);
  }
  function onClickSearch(value){
    let pokemonName = searchResult.find((item) => item.name === value.innerText);
    setFilterResult([]);
    setSearchInput(pokemonName.name);
    setPokemonData(pokemonName);
  }
  function onSearchClickHandler(){
    let pokemonName = searchResult.find((item) => item.name === searchInput);
    if(pokemonName){
      setSearchData(pokemonData);
      setNoPokemon(false);
      setSearchInput('');
    }else{
      setFilterResult([]);
      setSearchInput('');
      setSearchData('');
      setNoPokemon(true);
    }
  }
  function dropDownClickHandler(){
    setFilterResult(searchResult);
    if(isDropDown){
      setFilterResult([]);
      setIsDropDown(false);
    }else{
      setFilterResult(searchResult);
      setIsDropDown(true);
    }
  }
  function onCatchHandler(){
    setSearchData('');
  }
  return (
    <>
      <SearchBox
      setSearchResult={setSearchResult}
      onSearch={onSearchHandler}
      onSearchClick={onSearchClickHandler}
      searchInput={searchInput}
      dropDownClick={dropDownClickHandler}
    ></SearchBox>
      <div className='relative w-full'>
      <SearchResults
        searchData={filterResult}
        onClickSearch={onClickSearch}
      >
      </SearchResults>
      </div>
      {searchData && (
        <ShowPokemonData
          onCatch={onCatchHandler} 
          pokemonData={searchData}
        />
      )}
      {noPokemon && (
        <div className='bg-white p-4 mt-6'>
          <h1 className='text-red-500 text-2xl'>Sorry !! No Pokemon Found</h1>
          <button className='text-white bg-red-500 px-5 py-2 text-lg uppercase mt-4 hover:bg-red-600 duration-75 rounded-full shadow-xl' onClick={()=>{setNoPokemon(false)}}>Close</button>
        </div>
      )}
    </>
  )
}

export default InputWithSearchResult