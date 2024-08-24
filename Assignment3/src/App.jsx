import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Outlet/>
        <div className='absolute left-0 top-64 flex flex-col p-4 text-white'>
            <button type="button" Link="/" className='bg-gray-500 p-2 rounded-lg m-2 shadow-xl active:scale-95'>User Profile</button>
            <button type="button" Link="/random-jokes" className='bg-gray-500 p-2 rounded-lg m-2 shadow-xl active:scale-95'>Jokes</button>
            <button type="button" Link="/cats-listing" className='bg-gray-500 p-2 rounded-lg m-2 shadow-xl active:scale-95'>Cats Listing</button>
      </div>
      </div>
    </>
  )
}

export default App
