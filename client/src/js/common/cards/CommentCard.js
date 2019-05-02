import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CommentCard extends Component {

  deleteItem = e => {
    var elem = e.target.parentElement.parentElement.parentElement.parentElement;
    elem.style.display = 'none';
    fetch('/api/comment/' + this.props.item._id , {
      method: 'DELETE',
    }).then(res => res.json).then(suc => console.log(suc))
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { item } = this.props;

    const deleteB = (
      <Fragment>
        <Button color="secondary" onClick={this.deleteItem}>X</Button>
      </Fragment>
    );

    return(
      <div className="comment">
        <div className="comment__name">
          { item.name }
        </div>
        <div className="flex">
          <div className="comment__info">{ item.comment }</div><div>{isAuthenticated ? deleteB : null}</div>
        </div>
      </div>
    )
  }
}

CommentCard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(CommentCard)