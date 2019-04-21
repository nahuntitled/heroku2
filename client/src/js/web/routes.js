import Home from './pages/home'
import Tours from './pages/tours'
import LoginModal from '../common/auth/LoginModal'
import TourPage from './pages/tourPage'

export default [
  {
    path: "/",
    exact: true,
    admin: false,
    component: Home
  },
  {
    path: "/login",
    exact: true,
    admin: false,
    component: LoginModal
  },
  {
    path: "/tours",
    exact: true,
    admin: false,
    component: Tours
  },
  {
    path: "/tours/:id",
    exact: false,
    admin: false,
    component: TourPage
  }
]