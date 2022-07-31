import React, { FC } from 'react';
import Auth from '../../shared/Auth/Auth';
import styles from './Login.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {}

const Login: FC<LoginProps> = () => (
  <>
    <Auth />
  </>
);

export default Login;
