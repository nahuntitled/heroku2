import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Navigation extends Component {
  state = {
    isOpen: false,
    config: ''
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const guestLinks = (
      <Fragment>
        <NavItem className="ml-auto">
          <NavLink href="/admin">
            Админка
          </NavLink>
        </NavItem>
      </Fragment>
    );

    const navStyle = {
      background: "rgba(255,255,255,0.9)"
    };

    return (
      <div>
        <Navbar style={navStyle} className="fixed-top" light expand='sm'>
          <Container>
            <NavbarBrand href='/'><img src={ ".." + this.props.item.config.logo } height="40" width="70" alt="fdf"/></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Главная</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tours">Туры</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">О нас</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Контакты</NavLink>
              </NavItem>
                {isAuthenticated ? guestLinks : null}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

Navigation.propTypes = {
  item: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Navigation);
