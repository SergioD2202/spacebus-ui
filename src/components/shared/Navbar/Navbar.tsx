/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { FC, useContext } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../../images/rocket logo.svg';
import { DataContext } from '../../../context/DataContext';

const navbarStyles =
  ' bg-primary d-flex align-items-center justify-content-between';
const signUpStyles = ' btn btn-warning text-dark text-center p-1';
const signInStyles = ' btn btn-info text-light text-center p-1';
const logOutStyles = ' btn btn-danger text-light text-center p-1';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { user } = useContext(DataContext);

  return (
    <div className={styles.Navbar + navbarStyles}>
      <a href="/spacebus-ui" className={styles.link}>
        <div className="d-flex align-items-center" data-testid="Navbar">
          <img
            src={logo}
            className={styles.logo}
            alt="logo.svg"
            loading="lazy"
          />
          <span className={styles.name}>Spacebus</span>
        </div>
      </a>

      {user ? (
        <a href="/spacebus-ui/profile" className={styles.link}>
          <div className={styles.userIcon}>
            <div className={styles.profilePicPlaceholder}></div>
            <span className="ms-1">{user.username}</span>
            <span className="ms-1">Balance</span>
            <button
              type="button"
              className={styles.loginButtons + logOutStyles}
            >
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
            Login
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
};

export default Navbar;
