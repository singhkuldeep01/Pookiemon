import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './Components/SearchBox'
import InputWithSearchResult from './Components/InputWithSearchResult'

function App() {

  return (
    <>
      <div className='bg-[rgba(255,255,255,0.5)] flex justify-center py-10 w-max px-8 flex-col h-max items-center mt-4'>
       <InputWithSearchResult></InputWithSearchResult>
      </div>
    </>
  )
}

export default App
