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
import { initialState, teamReducer } from './FuncEditTeam'




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

export const TeamContext = createContext()


const TeamProvider = ({children}) => {
  const [state, dispatch] = useReducer(teamReducer, initialState)
  return (
    <TeamContext.Provider value={{state, dispatch}}>
      {children}
    </TeamContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <TeamProvider>
    <RouterProvider router={router} />
  </TeamProvider>
)
