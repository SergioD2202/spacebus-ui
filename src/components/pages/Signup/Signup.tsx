/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { FC } from 'react';
import Auth from '../../shared/Auth/Auth';
import styles from './Signup.module.scss';

interface SignupProps {}

const Signup: FC<SignupProps> = () => (
  <>
    <Auth type="register" />
  </>
);

export default Signup;
