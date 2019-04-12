import React from "react"
import CircularProgress from "@material-ui/core/CircularProgress"
import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
  loader: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "50%",
    top: "50%"
  }
}

const LoadingComponent = ({ isLoading, error, classes }) => {
  if (isLoading) {
    return (
      <div className={classes.loader}>
        <CircularProgress color="primary" />
      </div>
    )
  }

  if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  }

  return null
}

export default withStyles(styles)(LoadingComponent)