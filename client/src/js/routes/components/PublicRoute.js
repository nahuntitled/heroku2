import React from "react"
import { Route } from "react-router-dom"
import SiteLayout from "../../layout/SiteLayout"

const PublicRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <SiteLayout>
        <Component {...props} />
      </SiteLayout>
    )}
  />
)

export default PublicRoutes
