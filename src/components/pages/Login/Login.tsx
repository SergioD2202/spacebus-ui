import React, { FC } from 'react';
import styles from './Login.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {}

const Login: FC<LoginProps> = () => (
  <div className={styles.Login} data-testid="Login">
    Login Component
  </div>
);

export default Login;
