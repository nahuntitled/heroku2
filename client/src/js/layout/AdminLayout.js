import React from "react"
import { connect } from "react-redux"
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from "react-router-dom"

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: 55,
	},
	drawer: {
		width: drawerWidth,
    flexShrink: 0,
    zIndex: 44
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
	toolbar: theme.mixins.toolbar,
});

class AdminLayout extends React.Component {

  render() {
    const { children, classes } = this.props

    return (
      <div className={classes.root}>

      <CssBaseline/>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/" className="links">
            <Typography variant="h6" color="inherit" noWrap>
              "Не позіхай, валізи збирай!"
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}/>
        <List>
          <Link to="/admin" className="links">
            <ListItem button>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText>Налаштування</ListItemText>
            </ListItem>
          </Link>
          <Link to="/admin/tours" className="links">
            <ListItem button>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText>Тури</ListItemText>
            </ListItem>
          </Link>
          <Link to="/admin/countrys" className="links">
            <ListItem button>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText>Країни</ListItemText>
            </ListItem>
          </Link>
          <Link to="/admin/clients" className="links">
            <ListItem button>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText>Клієнти</ListItemText>
            </ListItem>
          </Link>
          <Link to="/admin/statistic" className="links">
            <ListItem button>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText>Статистика</ListItemText>
            </ListItem>
          </Link>
         </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        {children}
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

export default connect(mapStateToProps)(withStyles(styles)(AdminLayout))