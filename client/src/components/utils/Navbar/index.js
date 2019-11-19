import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';

import logoImageLight from 'assets/FNLogoLightV2.png';
import logoImageDark from 'assets/FNLogodarkV2.png';
import styles from './navbar.module.css';
import SlideMenu from '../SlideMenu';

class Navbar extends Component {
  state = {
    initialStatus: '',
    transparent: '',
    prevScrollpos: window.pageYOffset,
    visible: true,
    showMenu: false,
    showLogo: true,
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
      if (currentScrollPos > windowHeight * 0.3 - navbarHeight) {
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

  showHideMenu = () => {
    const { showMenu, showLogo } = this.state;
    this.setState({ showMenu: !showMenu, showLogo: !showLogo });
  };

  getLogoClass = showLogo => (!showLogo ? ` ${styles.hide__logo}` : '');

  render() {
    const {
      initialStatus,
      transparent,
      visible,
      showMenu,
      showLogo,
    } = this.state;
    return (
      <nav className={this.getNavbarClass(initialStatus, transparent, visible)}>
        <div className={`${styles.container} container`}>
          <div
            className={`${styles['image-container']} ${this.getLogoClass(
              showLogo,
            )}`}
          >
            <Link to="/">
              <img
                className={styles.logo}
                src={transparent ? logoImageLight : logoImageDark}
                alt="logo"
              />
            </Link>
          </div>
          <div className={styles.nav__list}>
            <button
              type="button"
              className={styles.menu__icon}
              onClick={this.showHideMenu}
            >
              <svg
                fill="#fffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
              </svg>
            </button>
            {console.log(showLogo)}
            {showMenu && this.getLogoClass(showLogo) ? (
              <SlideMenu showHideMenu={this.showHideMenu} />
            ) : (
              <div className={styles.menu}>
                <ul className={styles.list}>
                  <li className={styles['list--item']}>
                    <NavLink
                      exact
                      smooth
                      className={`${
                        styles['list--link']
                      } ${this.getTransparentClass(transparent)}`}
                      activeClassName={
                        transparent
                          ? styles['transparent--active']
                          : styles.active
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
                        transparent
                          ? styles['transparent--active']
                          : styles.active
                      }
                      to="/about#about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className={styles['list--item']}>
                    <NavLink
                      exact
                      className={`${
                        styles['list--link']
                      } ${this.getTransparentClass(transparent)}`}
                      activeClassName={
                        transparent
                          ? styles['transparent--active']
                          : styles.active
                      }
                      to="/view-buildings#view"
                    >
                      View Buildings
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
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
