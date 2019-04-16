import Home from './pages/home'
import LoginModal from '../common/auth/LoginModal'

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
  }
]