import Admin from './admin'
import ToursList from './resources/tours/list'
import { HotelsList } from './resources/hotels/list'

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
    path: "/admin/hotels",
    exact: true,
    admin: true,
    component: HotelsList
  }
]