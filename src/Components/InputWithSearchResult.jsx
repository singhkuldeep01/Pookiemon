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
    if(pokemonData.url)
      setSearchData(pokemonData);
    else{
      alert('No pokemon Exist');
    }
    setSearchInput('');
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
    console.log('Pokemon Caught');
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
    </>
  )
}

export default InputWithSearchResult