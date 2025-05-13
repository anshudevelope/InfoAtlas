import './App.css'
import Homepage from './Pages/Homepage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import CountryPage from './Pages/CountryPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageLayout from './Components/Pagelayout/PageLayout'
import ErrorPage from './Components/UI Components/ErrorPage'
import { CountryDetails } from './Components/UI Components/CountryDetails'

const routes = createBrowserRouter([

  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "country",
        element: <CountryPage />
      },
        {
        path: "country/:id",
        element: <CountryDetails />
      }
    ]
  }

])

function App() {

  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  )
}

export default App
