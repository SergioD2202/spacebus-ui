import React, { FC } from 'react';
import styles from './Auth.module.scss';
import jupiter from '../../../images/jupiter.jpg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AuthProps {}

const Auth: FC<AuthProps> = () => (
  <div className={styles.Auth + ' mx-auto'} data-testid="Auth">
    <div className="d-none d-lg-flex justify-content-between">
      <div className="w-100">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center flex-column">
            <div className={styles.imageContainer + ' d-none d-lg-flex'}>
              <img
                src={jupiter}
                alt="jupiter.jpg"
                className={styles.mainImage}
                loading="lazy"
              />
            </div>
          </div>
          <div className="d-flex align-items-center flex-column">
            <div className={styles.loginContainer}>Login</div>
            <div className={styles.titleContainer}>
              <form>
                <label className={styles.user} htmlFor="user">
                  Usuario
                </label>
                <br />
                <input type="text" id="user" name="user" />
                <br />
                <label className={styles.password} htmlFor="pwd">
                  Contrase&ntilde;a
                </label>
                <br />
                <input type="password" id="pwd" name="pwd" />
                <br />
                <button className={styles.button} type="submit">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Auth;
