import React from "react"
import { connect } from "react-redux"
import { Redirect, Route } from "react-router-dom"

// TODO fix error and add && user.isAdmin

const AdminRoute = ({
  component: Component,
  isAuthenticated,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
)

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(AdminRoute)
