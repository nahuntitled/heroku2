import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Place from '@material-ui/icons/Place';
import Email from '@material-ui/icons/Email';
import Call from '@material-ui/icons/Call';


class Contact extends React.Component {

  render() {
    const item = this.props.item;
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ul className="contacts">
              <li><h6>Контакты</h6></li>
              <li><Email /><a href="/">{item.config.contacts.email}</a></li>
              <li><Email /><a href="/">{item.config.contacts.email}</a></li>
              <li><Call /><a href="/">{item.config.contacts.phone}</a></li>
              <li><Place /><a href="/">{item.config.contacts.location}</a></li>
            </ul>
          </div>
          <div className="col-md-8"><iframe title="maps" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1116.61416677695!2d25.913236703678518!3d48.26878085146096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47340f525ff58ae5%3A0xffa3f1c9a3e873e6!2z0IbQvdGB0YLQuNGC0YPRgiDRhNGW0LfQuNC60L4t0YLQtdGF0L3RltGH0L3QuNGFINGC0LAg0LrQvtC80L_igJnRjtGC0LXRgNC90LjRhSDQvdCw0YPQuiAo0IbQpNCi0JrQnSk!5e0!3m2!1sru!2sua!4v1559127943153!5m2!1sru!2sua" frameBorder="0" style={{"border":"0","minHeight":"500px","width":'100%'}} allowFullScreen /></div>
        </div>
      </div>
    )
  }
}

Contact.propTypes = {
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  null
)(Contact);
