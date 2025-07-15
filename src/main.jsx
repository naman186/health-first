import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import {App, Home, Login, Signup, BookAppointment, SearchPage, Profile, DoctorHome} from './components/index.js'
import AuthLayout from './components/AuthLayout.jsx'
import Patients from './components/container/Patients.jsx'
import Appointments from './components/container/Appointments.jsx'
import CheckoutPage from './components/container/CheckoutPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: '/',
        element: (
          <AuthLayout authentication={false}>
            <Home />
          </AuthLayout>
        ),
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
        path: '/BookAppointment/:id',
        element: (
          <AuthLayout authentication={true}>
            <BookAppointment />
          </AuthLayout>
        ),
      },
      {
        path:"/Search",
        element: (
          <AuthLayout authentication={true}>
            <SearchPage/>
          </AuthLayout>
        )
      },
      {
        path:"/UserProfile",
        element: (
          <AuthLayout authentication={true}>
            <Profile/>
          </AuthLayout>
        )
      },
      {
        path:"/doctorhome",
        element:(
          <AuthLayout authentication={true} allowedRoles={['doctor']}>
            <DoctorHome/>
          </AuthLayout>
        )
      },
      {
        path:"/Patients",
        element:(
          <AuthLayout authentication={true} allowedRoles={['doctor']}>
            <Patients/>
          </AuthLayout>
        )
      },
      {
        path:"/Appointments",
        element:(
          <AuthLayout authentication={true} allowedRoles={['doctor']}>
            <Appointments/>
          </AuthLayout>
        )
      },
      {
        path:"/CheckoutPage/:id",
        element:(
        <AuthLayout authentication={true} allowedRoles={['user']}>
          <CheckoutPage/>
        </AuthLayout>
        )
      },
      
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
