/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { FC } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../../images/rocket logo.svg';

const navbarStyles =
  ' bg-primary d-flex align-items-center justify-content-between';
const signUpStyles = ' btn btn-warning text-dark text-center p-1';
const signInStyles = ' btn btn-info text-light text-center p-1';
const logOutStyles = ' btn btn-danger text-light text-center p-1';

const isSignedUp = false;

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar + navbarStyles}>
    <a href="/spacebus-ui" className={styles.link}>
      <div className="d-flex align-items-center" data-testid="Navbar">
        <img src={logo} className={styles.logo} alt="logo.svg" loading="lazy" />
        <span className={styles.name}>Spacebus</span>
      </div>
    </a>

    {isSignedUp ? (
      <a href="/spacebus-ui/profile" className={styles.link}>
        <div className={styles.userIcon}>
          <div className={styles.profilePicPlaceholder}></div>
          <span className="ms-1">Username</span>
          <span className="ms-1">Balance</span>
          <button type="button" className={styles.loginButtons + logOutStyles}>
            Log Out
          </button>
        </div>
      </a>
    ) : (
      <div>
        <a
          href="/spacebus-ui/login"
          type="button"
          className={styles.loginButtons + signInStyles}
        >
          Sign In
        </a>
        <a
          href="/spacebus-ui/sign-up"
          type="button"
          className={styles.loginButtons + signUpStyles}
        >
          Sign Up
        </a>
      </div>
    )}
  </div>
);

export default Navbar;
