import Admin from './admin'
import ToursList from './resources/tours/list'
import CountrysList from './resources/countrys/list'

export default [
  {
    path: "/admin",
    exact: true,
    admin: true,
    component: Admin
  },
  {
    path: "/admin/tours",
    exact: true,
    admin: true,
    component: ToursList
  },
  {
    path: "/admin/countrys",
    exact: true,
    admin: true,
    component: CountrysList
  }
]