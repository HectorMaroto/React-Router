import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Error from './routes/Error'

// Esta funcion espera un array con las rutas y su contenido (createBrowserRouter)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error/>, // Elemento para manejar errores
    // Rutas hijas
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact/>
      }
    ]
  },
  {
    path: '/about',
    element: <About/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* RouterProvider proporciona las rutas, creadas en el BrowserRouter, para ser usadas en la app */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
