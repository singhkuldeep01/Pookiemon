import React, { useEffect ,useState} from 'react'

function ShowPokemonData({pokemonData , onCatch}) {
    const[data, setData] = useState([]);
    const url = pokemonData.url;
    async function fetchData() {
        const response = await fetch(url)
        const data1 = await response.json()
        setData(data1);
    }
    useEffect(() => {
        fetchData() ;
    },[pokemonData]);
  return(
    <>
        <div className='flex mt-16 gap-8 text-black items-center'>
            <div className='w-72 h-72'>
                <img src={data.sprites?.other?.['official-artwork']?.front_default} alt=''></img>
            </div>
            <div className='w-max h-max  flex flex-col justify-center items-center px-10 text-white bg-black py-6 min-w-[500px]'>
                <div className=' p-2 rounded-sm text-5xl uppercase tracking-wider text-white px-4'>{pokemonData?.name }</div>
                <div className='flex mt-4'>
                    <div className=' p-2 rounded-lg px-3 bg-blue-500 mr-4'>Height: {data.height} </div>
                    <div className=' p-2 rounded-lg px-3 bg-orange-400'>Weight: {data.weight}</div>
                </div>
                <div className='bg-indigo-700 rounded-lg p-2 mt-2'>Base Experience: {data.base_experience}</div>
                <div className=' rounded-lg p-2 mt-2'>
                    <div className=' p-2 rounded-lg text-lg bg-green-700 mb-2'>Abilities:</div>
                    <div className='flex gap-2'>
                        {data.abilities?.map((item , index) => {
                            return <div className=' p-2 rounded-full text-white px-4 bg-red-500' key={index}>{item.ability.name}</div>
                        })}
                    </div>
                </div>
                <div className=' p-2 rounded-sm  w-full mt-2 text-lg flex justify-center items-center gap-2'>
                Moves: {data.moves?.slice(0, 5).map((item) => {
              return <div className='p-1 rounded-full text-white px-4 bg-blue-500' key={item.move.name}>{item.move.name}</div>;
            })}
                </div>
                <div className=' p-2 rounded-sm bg-purple-600 w-full mt-4 text-lg'>Types: {data.types?.[0]?.type?.name }</div>
            </div>
        </div>
        <button className='text-white bg-blue-500 px-5 py-2 text-lg ml-2 mt-8 hover:bg-blue-600 duration-75 rounded-full' onClick={onCatch}>Catch</button>
    </>
  );
}

export default ShowPokemonData