/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { FC } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../../images/rocket logo.svg';

const navbarStyles =
  ' bg-primary d-flex align-items-center justify-content-between';
const signUpStyles = ' btn btn-warning text-dark text-center p-1';
const signInStyles = ' btn btn-info text-light text-center p-1';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar + navbarStyles}>
    <div className="d-flex align-items-center" data-testid="Navbar">
      <img src={logo} className={styles.logo} alt="logo.svg" loading="lazy" />
      <span className={styles.name}>Spacebus</span>
    </div>

    <div>
      <button type="button" className={styles.loginButtons + signInStyles}>
        Sign In
      </button>
      <button type="button" className={styles.loginButtons + signUpStyles}>
        Sign Up
      </button>
    </div>
  </div>
);

export default Navbar;
