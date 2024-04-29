import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'
import { createContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


import App from './App'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Footer from './Footer'
import EditTeam from './EditTeam'



// const [state, dispatch] = useReducer({playerName, countingHealth, countingSpeed, countingAttack}, {initialState})


// export const ReducerContext = createContext()

// const ReducerProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//   <reducerContext.Provider value={{ state, dispatch }}>
//   {children}
//   </reducerContext.Provider>
//   )
//   }


// const ReducerProvider = ({ children }) => {
//  const [state, dispatch] = useReducer(countReducer, initialState)



function Layout() {
  return (
      <>
        <Header />
        <div id='page-content'>
          <Outlet />
        </div>
        <Footer />
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/EditTeam',
        element: <EditTeam />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
