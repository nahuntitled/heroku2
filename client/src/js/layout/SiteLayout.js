import React from "react"
import Navigation from "../common/Navigation"
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from '../common/Footer'

const styles = () => ({
  progress: {
    position: "fixed",
    top: "calc(50vh - 20px)",
    left: "calc(50vw - 20px)"
  },
});

class SiteLayout extends React.Component {
  state = {
    render: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ render: true })
    }, 2000);
  }

  render() {
    const { children, classes } = this.props
    if(this.state.render) {
      return (
        <div>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      )
    } else {
      return (
        <CircularProgress className={classes.progress} />
      )
    }
  }
}

SiteLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user,
    item: state.item
  }
}

export default connect(mapStateToProps)(withStyles(styles)(SiteLayout))