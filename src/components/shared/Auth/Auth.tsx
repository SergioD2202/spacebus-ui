import React, { FC } from 'react';
import styles from './Auth.module.scss';
import space from '../../../images/space.jpg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AuthProps {}

const Auth: FC<AuthProps> = () => (
  <div
    className={
      styles.Auth +
      ' d-flex align-items-center align-items-lg-start justify-content-lg-between w-100'
    }
    data-testid="Auth"
  >
    <img
      src={space}
      alt="jupiter.jpg"
      className={styles.mainImage + ' d-none d-lg-block'}
      loading="lazy"
    />
    <div
      className={
        styles.loginContainer +
        ' d-flex align-items-center justify-content-center flex-column w-50 mx-auto'
      }
    >
      <div className="d-flex flex-column align-items-start">
        <span className="mb-2">Login</span>
        <form
          className={
            styles.titleContainer + ' p-3 d-flex flex-column align-items-start'
          }
        >
          <label className={styles.user + ' mb-2'}>Usuario</label>
          <input type="text" id="user" name="user" className="mb-2" />
          <label className={styles.password + ' mb-2'}>Contrase&ntilde;a</label>
          <input type="password" id="pwd" name="pwd" className="mb-4" />
          <div className="w-100 text-center">
            <button className={styles.button + ' btn btn-primary rounded'}>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Auth;
