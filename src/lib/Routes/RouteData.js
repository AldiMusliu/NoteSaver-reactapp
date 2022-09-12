import Error from '../../Pages/Error'
import ForgotPassword from '../../Pages/ForgotPassword'
import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import Register from '../../Pages/Register/Register'
import ResetPassword from '../../Pages/ResetPassword'
import VerifyAccount from '../../Pages/VerifyAccount/VerifyAccount'
import Profile from '../../Pages/Profile/Profile'
import Note from '../../Pages/Note'

export const routeData = {
  public: [
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'verify',
      element: <VerifyAccount />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: 'reset-password',
      element: <ResetPassword />,
    },
  ],
  exposed: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ],
  user: [
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/notes/:noteId',
      element: <Note/>,
    },
  ],
}