import React, { FC } from 'react';
import styles from './Auth.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AuthProps {}

const Auth: FC<AuthProps> = () => (
  <div className={styles.Auth} data-testid="Auth">
    Auth Component
  </div>
);

export default Auth;
