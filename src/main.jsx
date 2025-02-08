import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import CreaterTrip from './create-trip'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path: '/create-trip',
    element:<CreaterTrip/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </StrictMode>,
)
