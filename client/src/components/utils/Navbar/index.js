import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';

import logoImageLight from 'assets/FNLogoLightV2.png';
import logoImageDark from 'assets/FNLogodarkV2.png';
import styles from './navbar.module.css';

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

  getTransparentClass = transparent =>
    transparent ? ` ${styles.transparent}` : '';

  getNavbarClass = (initialStatus, transparent, visible) => {
    let className = styles.navbar;
    className += !transparent ? ` ${styles.light}` : '';
    className += initialStatus ? ` ${styles.fixed}` : ` ${styles.sticky}`;
    className += !visible ? ` ${styles.hidden}` : '';
    return className;
  };

  render() {
    const { initialStatus, transparent, visible } = this.state;
    return (
      <nav className={this.getNavbarClass(initialStatus, transparent, visible)}>
        <div className={`${styles.container} container`}>
          <div className={styles['image-container']}>
            <Link to="/">
              <img
                className={styles.logo}
                src={transparent ? logoImageLight : logoImageDark}
                alt="logo"
              />
            </Link>
          </div>
          <div className={styles.menu}>
            <ul className={styles.list}>
              <li key="home" className={styles['list--item']}>
                <NavLink
                  exact
                  className={`${
                    styles['list--link']
                  } ${this.getTransparentClass(transparent)}`}
                  activeClassName={
                    transparent ? styles['transparent--active'] : styles.active
                  }
                  to="/"
                  isActive={(match, { hash }) =>
                    !!(match && match.isExact && !hash)
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className={styles['list--item']}>
                <NavLink
                  exact
                  className={`${
                    styles['list--link']
                  } ${this.getTransparentClass(transparent)}`}
                  activeClassName={
                    transparent ? styles['transparent--active'] : styles.active
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className={styles['list--item']}>
                <NavLink
                  exact
                  smooth
                  className={`${
                    styles['list--link']
                  } ${this.getTransparentClass(transparent)}`}
                  activeClassName={
                    transparent ? styles['transparent--active'] : styles.active
                  }
                  to="/#sharingBuildings"
                  isActive={(match, { hash }) =>
                    !!(match && match.isExact && hash)
                  }
                >
                  Report Buildings
                </NavLink>
              </li>
              <li className={styles['list--item']}>
                <NavLink
                  exact
                  className={`${
                    styles['list--link']
                  } ${this.getTransparentClass(transparent)}`}
                  activeClassName={
                    transparent ? styles['transparent--active'] : styles.active
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
  transparent: PropTypes.bool,
};

Navbar.defaultProps = {
  transparent: false,
};

export default Navbar;
