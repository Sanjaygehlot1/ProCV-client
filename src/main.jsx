import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Templates from './Pages/Templates.jsx'
import GetStarted from './Pages/GetStarted'
import FinalPage from './Pages/FinalPage'
import { Store } from './Store/store'
import { Provider } from 'react-redux'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignupPage'
const router = createBrowserRouter([
  {
    element: <App/>,
    path : "/",
    children : [
      {
        element: <GetStarted/>,
        path: "/"
      },
      {
        element: <LoginPage/>,
        path: "/login"
      },
      {
        element: <SignUpPage/>,
        path: "/register"
      },
      {
        element: <Templates/>,
        path: "/templates"
      },
      {
        element: <FinalPage/>,
        path: "/final/:resumeId"
      },
      
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    
  <RouterProvider router={router}>
    
  </RouterProvider>
    </Provider>
)
