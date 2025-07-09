import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import {App, Home, Login, Signup, BookAppointment, SearchPage, Profile, DoctorHome} from './components/index.js'
import AuthLayout from './components/AuthLayout.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: '/BookAppointment',
        element: (
          <AuthLayout authentication={false}>
            <BookAppointment />
          </AuthLayout>
        ),
      },
      {
        path:"/Search",
        element: (
          <AuthLayout authentication={false}>
            <SearchPage/>
          </AuthLayout>
        )
      },
      {
        path:"/UserProfile",
        element: (
          <AuthLayout authentication={false}>
            <Profile/>
          </AuthLayout>
        )
      },
      {
        path:"/doctorhome",
        element:(
          <AuthLayout authentication={false}>
            <DoctorHome/>
          </AuthLayout>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
