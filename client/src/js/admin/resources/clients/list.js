import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import { getClient } from '../../../actions/itemActions';
import { connect } from 'react-redux';
import store from '../../../../store'

store.dispatch(getClient());

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: `Ім'я` },
  { id: 'surname', numeric: false, disablePadding: true, label: 'Прізвище' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'phone', numeric: true, disablePadding: false, label: 'Телефон' },
  { id: 'date', numeric: true, disablePadding: false, label: 'Дата' },
  { id: 'days', numeric: true, disablePadding: false, label: 'Дній' },
  { id: 'tour', numeric: true, disablePadding: false, label: 'Тур' },
  { id: 'comment', numeric: true, disablePadding: false, label: 'Коментар' },
  { id: 'delete', numeric: true, disablePadding: false, label: 'Видалення' }
];


class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
};

const toolbarStyles = theme => ({
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "230px"
  }
});

class EnhancedTableToolbar extends React.Component {
  render() {
  const { classes } = this.props;

  return (
    <Toolbar>
      <div className={classes.title}>
        <Typography variant="h5" id="tableTitle">
          Клієнти
        </Typography>
      </div>
    </Toolbar>
  )}
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    padding: '20px 30px',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class ClientsList extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'name',
    selected: [],
    data: [],
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  deleteItem = e => {
    var id = e.target.parentElement.parentElement.parentElement.id;
    fetch('/api/client/' + id , {
      method: 'DELETE',
    }).then(res => res.json).then(suc => { console.log(suc); store.dispatch(getClient()) })
  }

  render() {
    const { classes } = this.props;
    const data = this.props.item.client;
    const { order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((n,i) => {
                  return (
                    <TableRow
                      role="checkbox"
                      tabIndex={-1}
                      key={i}
                      id={n._id}
                    >
                      <TableCell component="th" scope="row" padding="none">{n.name}</TableCell>
                      <TableCell align="left">{ n.surname }</TableCell>
                      <TableCell align="left">{ n.email }</TableCell>
                      <TableCell align="left">{ n.phone }</TableCell>
                      <TableCell align="left">{ n.date }</TableCell>
                      <TableCell align="left">{ n.days }</TableCell>
                      <TableCell align="left">{ n.tour }</TableCell>
                      <TableCell align="left">{ n.comment }</TableCell>
                      <TableCell align="right"><Button color="secondary" onClick={this.deleteItem}>Видалити</Button></TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

ClientsList.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  getClient: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getClient }
)(withStyles(styles)(ClientsList));