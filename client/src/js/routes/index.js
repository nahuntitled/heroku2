import React from "react"
import { Switch } from "react-router-dom"
import routes from "./routes"
import PublicRoute from "./components/PublicRoute"
import AdminRoute from "./components/AdminRoute"

const Routes = () => (
  <Switch>
    {routes.map((route, i) => {
      if (route.admin) {
        return <AdminRoute key={i} {...route} />
      } else {
      return <PublicRoute key={i} {...route} />
      }
    })}
  </Switch>
)

export default Routes