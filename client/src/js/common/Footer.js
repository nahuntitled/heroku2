import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Place from '@material-ui/icons/Place';
import Email from '@material-ui/icons/Email';
import Call from '@material-ui/icons/Call';

class Footer extends Component {

  render() {
    const item = this.props.item;
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pda_l">
              <img src={ ".." + item.config.logo } height="150" alt="" />
              <div className="footer__social">
                <a href={item.config.socials.instagram}><i className="fab fa-instagram"></i></a>
                <a href={item.config.socials.twitter}><i className="fab fa-twitter"></i></a>
                <a href={item.config.socials.facebook}><i className="fab fa-facebook-f"></i></a>
                <a href={item.config.socials.google}><i className="fab fa-google"></i></a>
              </div>
            </div>
            <div className="col-md-5">
              <ul className="footer__nav">
                <li><h6>Контакты</h6></li>
                <li><Email /><a href="/">{item.config.contacts.email}</a></li>
                <li><Email /><a href="/">{item.config.contacts.email}</a></li>
                <li><Call /><a href="/">{item.config.contacts.phone}</a></li>
                <li><Place /><a href="/">{item.config.contacts.location}</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="footer__nav">
                <li><a href="/">Головна</a></li>
                <li><a href="/tours">Тури</a></li>
                <li><a href="/about">Про нас</a></li>
                <li><a href="/contact">Контакти</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  null
)(Footer);
