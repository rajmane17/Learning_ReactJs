import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import {TrustAndSafety, Press, Logo, ContactUs, Carrers, BusinessSolution, Blog, AboutUs} from "./Components/index"
 

const router = createBrowserRouter([
  {
    path:"/",
    element: <Outlet />,
    children:[
      {
        path:"",
        element: <Logo />
      },
      {
        path:"business-solution",
        element: <BusinessSolution />
      },
      {
        path:"press",
        element: <Press />
      },
      {
        path:"Carrers",
        element: <Carrers />
      },
      {
        path:"About-Us",
        element:<AboutUs />
      },
      {
        path:"Blog",
        element:<Blog />
      },
      {
        path:"Contact Us",
        element:<ContactUs />
      },
      {
        path:"TrustAndSafety",
        element:<TrustAndSafety />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
