/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { FC } from 'react';
import styles from './Home.module.scss';
import mainImage from '../../../images/saturn.webp';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
    <img src={mainImage} alt="main image.webp" className={styles.mainImage} />
  </div>
);

export default Home;
