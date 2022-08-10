import React, { FC } from 'react';
import styles from './Auth.module.scss';
import jupiter from '../../../images/jupiter.jpg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AuthProps {}

const Auth: FC<AuthProps> = () => (
  <div className={styles.Auth} data-testid="Auth">
    <div className={styles.imageContainer}>
      <img
        src={jupiter}
        alt="jupiter.jpg"
        className={styles.mainImage + ' d-none d-lg-block'}
        loading="lazy"
      />
      <div className={styles.loginContainer}>
        <div className={styles.login}>Login</div>
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.user}>Usuario</div>
        <div className={styles.password}>Contrase&ntilde;a</div>
      </div>
    </div>
  </div>
);

export default Auth;
