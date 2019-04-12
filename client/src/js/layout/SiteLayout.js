import React from "react"
import Navigation from "../common/Navigation"
import { connect } from "react-redux"
import store from "../../store";
import { loadUser } from '../actions/authActions';

store.dispatch(loadUser())

class SiteLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Navigation />
        <main>{children}</main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  }
}

export default connect(mapStateToProps)(SiteLayout)