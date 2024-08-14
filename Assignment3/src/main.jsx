import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProfile from './pages/UserProfile.jsx'
import JokesTweet from './pages/JokesTweet.jsx'
import CatsListing from './pages/CatsListing.jsx'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<UserProfile/>}/>
      <Route path='/random-jokes' element={<JokesTweet/>}/>
      <Route path='/cats-listing' element={<CatsListing/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </StrictMode>,
)
