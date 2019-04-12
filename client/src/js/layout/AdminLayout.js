import React from "react"
import AdminNavigation from "../common/navigation/AdminNavigation"
import Grid from "@material-ui/core/Grid"
import { Paper } from "@material-ui/core"
import { connect } from "react-redux"
import store from "../../store";

store.dispatch(loadUser())

class AdminLayout extends React.Component {

  render() {
    const { children } = this.props

    return (
      <div>
        <AdminNavigation />
        <main>
          <Grid container spacing={16}>
            <Grid item md={2}>
            </Grid>
            <Grid item md={10}>
              <Paper style={{ margin: "20px 20px 20px 0" }}>{children}</Paper>
            </Grid>
          </Grid>
        </main>
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

export default connect(mapStateToProps)(AdminLayout)