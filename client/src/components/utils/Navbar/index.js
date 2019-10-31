import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import logoImageLight from 'assets/FNLogoLightV2.png';
import logoImageDark from 'assets/FNLogodarkV2.png';
import './style.css';

class Navbar extends Component {
  state = {
    initialStatus: '',
    transparent: '',
    prevScrollpos: window.pageYOffset,
    visible: true,
  };

  componentDidMount() {
    const { transparent } = this.props;
    this.setState({ transparent, initialStatus: transparent });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { initialStatus, prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const windowHeight = document.documentElement.clientHeight;
    const navbarHeight = 80;
    let visible = true;

    if (initialStatus) {
      if (currentScrollPos > windowHeight * 0.7 - navbarHeight) {
        visible = prevScrollpos > currentScrollPos;
        this.setState({ transparent: false });
      } else {
        this.setState({ transparent: true });
      }
    } else {
      visible = prevScrollpos > currentScrollPos;
    }
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  getTransparentClass = transparent => (transparent ? ' transparent' : ' ');

  getNavbarClass = (initialStatus, transparent, visible) => {
    let className = 'navbar';
    className += !transparent ? ` light` : '';
    className += initialStatus ? ` fixed` : ' sticky';
    className += !visible ? ` navbar--hidden` : '';
    return className;
  };

  render() {
    const { initialStatus, transparent, visible } = this.state;
    return (
      <nav className={this.getNavbarClass(initialStatus, transparent, visible)}>
        <div className="navbar__container container">
          <div className="image-container">
            <Link to="/">
              <img
                className="logo"
                src={transparent ? logoImageLight : logoImageDark}
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar__menu">
            <ul className="navbar__list">
              <li key="home" className="navbar__list--item">
                <NavLink
                  exact
                  className={`navbar__list--link ${this.getTransparentClass(
                    transparent,
                  )}`}
                  activeClassName={
                    transparent ? ' transparent--active' : 'active'
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="navbar__list--item">
                <NavLink
                  exact
                  className={`navbar__list--link ${this.getTransparentClass(
                    transparent,
                  )}`}
                  activeClassName={
                    transparent ? ' transparent--active' : 'active'
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="navbar__list--item">
                <NavLink
                  exact
                  className={`navbar__list--link ${this.getTransparentClass(
                    transparent,
                  )}`}
                  activeClassName={
                    transparent ? ' transparent--active' : 'active'
                  }
                  to="/sharing-buildings"
                >
                  Sharing Buildings
                </NavLink>
              </li>
              <li className="navbar__list--item">
                <NavLink
                  exact
                  className={`navbar__list--link ${this.getTransparentClass(
                    transparent,
                  )}`}
                  activeClassName={
                    transparent ? ' transparent--active' : 'active'
                  }
                  to="/view-buildings"
                >
                  View Buildings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  transparent: PropTypes.bool.isRequired,
};

export default Navbar;
