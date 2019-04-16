import React from "react"
import { connect } from "react-redux"
import { Route } from "react-router-dom"
import AdminLayout from '../../layout/AdminLayout'

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
      isAuthenticated ? <AdminLayout><Component {...props} /></AdminLayout> : null
    }
  />
)

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(AdminRoute)
