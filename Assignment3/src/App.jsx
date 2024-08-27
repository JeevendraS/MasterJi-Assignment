import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Outlet />
        <div className='absolute left-0 top-64 flex flex-col p-4 text-white'>
          <NavLink to="/" className={({isActive})=>`${isActive? "bg-gray-800" :"bg-gray-500" } p-2 rounded-lg m-2 shadow-xl active:scale-95`}>User Profile</NavLink>
          <NavLink to="/random-jokes" className={({isActive})=>`${isActive? "bg-gray-800" :"bg-gray-500" } p-2 rounded-lg m-2 shadow-xl active:scale-95`}>Jokes</NavLink>
          <NavLink to="/cats-listing" className={({isActive})=>`${isActive? "bg-gray-800" :"bg-gray-500" } p-2 rounded-lg m-2 shadow-xl active:scale-95`}>Cats Listing</NavLink>
          </div>
      </div>
    </>
  )
}

export default App
