import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Footer extends Component {

  render() {
    const item = this.props.item;
    return (
      <footer className="footer mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={ ".." + item.config.logo } height="150" alt="" />
              <div className="footer__social">
                <a href={item.config.socials.instagram}><i className="fab fa-instagram"></i></a>
                <a href={item.config.socials.twitter}><i className="fab fa-twitter"></i></a>
                <a href={item.config.socials.facebook}><i className="fab fa-facebook-f"></i></a>
                <a href={item.config.socials.google}><i className="fab fa-google"></i></a>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="footer__nav">
                <li><a href="/">Главная</a></li>
                <li><a href="/">Туры</a></li>
                <li><a href="/">О нас</a></li>
                <li><a href="/">Контакты</a></li>
                <li><a href="/">Цены</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="footer__nav">
                <li><h6>Контакты</h6></li>
                <li><i className="fa fa-globe"></i><a href="/">{item.config.contacts.email}</a></li>
                <li><i className="fa fa-globe"></i><a href="/">{item.config.contacts.email}</a></li>
                <li><i className="fa fa-phone"></i><a href="/">{item.config.contacts.phone}</a></li>
                <li><i className="fa fa-map-marker"></i><a href="/">{item.config.contacts.location}</a></li>
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
