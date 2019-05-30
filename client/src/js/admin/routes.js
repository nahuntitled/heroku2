import Admin from './admin'
import ToursList from './resources/tours/list'
import CountrysList from './resources/countrys/list'
import ClientsList from './resources/clients/list'
import Stat from './resources/statistic'

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
  },
  {
    path: "/admin/clients",
    exact: true,
    admin: true,
    component: ClientsList
  },
  {
    path: "/admin/statistic",
    exact: true,
    admin: true,
    component: Stat
  }
]